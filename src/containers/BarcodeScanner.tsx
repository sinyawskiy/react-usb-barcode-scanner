import React, {useEffect} from 'react';
import { getCharByKeyCode } from '@utils/index';
import { connect } from 'react-redux';
import { scanning, scanned } from '@actions/actions';
import config from '@core/config';
import {ActionCreator, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import IActionScanning from "@models/IActionScanning";
import IActionScanned from "@models/IActionScanned";
import IConfig from "@models/IConfig";

const defaultConfig = config;

interface BarcodeScannerProps {
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned,string>;
    config: IConfig;
}

class BarcodeScanner extends React.PureComponent<BarcodeScannerProps> {
    constructor(props:any) {
        super(props);
        this.config = props.config;
    }

    log = (...args: any) => {
        if(this.config.debug){
            console.debug(...args);
        }
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
    config:IConfig = defaultConfig;

    handleKeydown = (e:any) => {
        const d = new Date();
        const character = getCharByKeyCode(e.keyCode, e.shiftKey);
        if(character === ''){ // не реагируем на нажатия без символа
            return
        }
        if(this.config.ignoreOnInputs && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')){ // не реагируем если курсор в инпуте
            return
        }
        if(this.keyDownTime === null){
            // фиксируем время первого нажатия
            this.keyDownTime = d.getTime();
            this.inputText = character;
        } else {
            const newTime = d.getTime();
            if (newTime - this.keyDownTime < this.config.intervalBetweenKeyPress) { // если между нажатиями меньше 50 мс (у сканера примерно 25 мс)
                this.inputText = this.inputText + character;
                if (this.isBusy === null) {
                    // сообщаем приложению, что идет быстрое нажатие на клавиши, характерное для сканера
                    this.props.scanning();
                    this.log('BarcodeScanner is busy');
                }
                if (this.isBusy) {
                    // перезапускаем таймер
                    clearTimeout(this.isBusy);
                }
                this.isBusy = setTimeout(() => {
                    // нажатия прекратились ждем 100 мс, то ввод прекратился
                    this.log(this.inputText);
                    this.props.scanned(
                        { data: this.inputText , historyLength: this.config.historyLength, historyDict: { username: 'John Doe' } }
                    );
                    this.isBusy = null;
                    this.inputText = '';
                    this.log('BarcodeScanner not busy');
                }, this.config.scanningEndTimeout);
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

interface BarcodeScannerContainerProps {
    enabled: boolean;
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned,string>;
    config?: IConfig;
}

const BarcodeScannerContainer = (props:BarcodeScannerContainerProps): JSX.Element | null => {
    const { enabled, ...attrs } = props;
    const config = { ...defaultConfig, ...attrs.config};

    useEffect(()=>{
        if(config.debug) {
            console.debug('BarcodeScanner config', config);
            console.debug(enabled ? 'BarcodeScanner enabled' : 'BarcodeScanner disabled');
        }
    },[ enabled, config ]);

    if (enabled) {
        return (
            <BarcodeScanner {...attrs} config={config}/>
        )
    } else {
        return null;
    }
}

// @ts-ignore
export default connect(({ barcodeScanner: { enabled } })=>({
    enabled,
}), { scanned, scanning })(BarcodeScannerContainer);
