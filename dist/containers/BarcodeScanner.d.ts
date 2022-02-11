import React from 'react';
import { ActionCreator, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import IActionScanning from "@models/IActionScanning";
import IActionScanned from "@models/IActionScanned";
import IConfig from "@models/IConfig";
interface BarcodeScannerProps {
    enabled: boolean;
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned, string>;
    config?: IConfig;
}
declare class BarcodeScanner extends React.PureComponent<BarcodeScannerProps> {
    constructor(props: any);
    log: (...args: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    isBusy: null | ReturnType<typeof setTimeout>;
    keyDownTime: null | number;
    inputText: string;
    config: IConfig;
    handleKeydown: (e: any) => void;
    render(): null;
}
declare const _default: import("react-redux").ConnectedComponent<typeof BarcodeScanner, import("react-redux").Omit<React.ClassAttributes<BarcodeScanner> & BarcodeScannerProps, "scanning" | "scanned" | "enabled">>;
export default _default;
