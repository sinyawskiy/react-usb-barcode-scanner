import React from 'react';
import { getCharByKeyCode } from '@utils/index';
import { connect } from 'react-redux';
import { scanning, scanned } from '@actions/actions';
import config from '@core/config';
import {ActionCreator, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import IActionScanning from "@models/IActionScanning";
import IActionScanned from "@models/IActionScanned";



interface BarcodeScannerProps {
    enabled: boolean;
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned,string>;
}

const log = (...args: any) => {
    if(config.debug){
        console.debug(...args);
    }
}

log('BarcodeScanner config', config);

class BarcodeScanner extends React.PureComponent<BarcodeScannerProps> {
    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    isBusy:null|ReturnType<typeof setTimeout> = null;
    keyDownTime: null|number = null; // если первое нажатие, а за ним быстрое второе то отправляем что занят
    inputText:string = '';

    handleKeydown = (e:any) => {
        const d = new Date();
        const character = getCharByKeyCode(e.keyCode, e.shiftKey);

        if(this.keyDownTime === null){
            // фиксируем время первого нажатия
            this.keyDownTime = d.getTime();
            this.inputText = character;
        } else {
            const newTime = d.getTime();
            if (newTime - this.keyDownTime < config.intervalBetweenKeyPress) { // если между нажатиями меньше 50 мс (у сканера примерно 25 мс)
                this.inputText = this.inputText + character;
                if (this.isBusy === null) {
                    // сообщаем приложению, что идет быстрое нажатие на клавиши, характерное для сканера
                    this.props.scanning();
                    log('is busy');
                }
                if (this.isBusy) {
                    // перезапускаем таймер
                    clearTimeout(this.isBusy);
                }
                this.isBusy = setTimeout(() => {
                    // нажатия прекратились ждем 100 мс, то ввод прекратился
                    log(this.inputText);
                    this.props.scanned({ data: this.inputText });
                    this.isBusy = null;
                    this.inputText = '';
                    log('not debug');
                }, config.scanningEndTimeout);
            } else {
                this.inputText = getCharByKeyCode(e.keyCode, e.shiftKey);
            }
            this.keyDownTime = newTime;
        }
    }


    render() {
        return null;
    }
}


// @ts-ignore
export default connect(({ barcodeScanner: { enabled } })=>({
    enabled,
}), { scanned, scanning })(BarcodeScanner);
