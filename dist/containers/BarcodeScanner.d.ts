import React from 'react';
import { ActionCreator, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import IActionScanning from "@models/IActionScanning";
import IActionScanned from "@models/IActionScanned";
interface BarcodeScannerProps {
    enabled: boolean;
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned, string>;
}
declare class BarcodeScanner extends React.PureComponent<BarcodeScannerProps> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    isBusy: null | ReturnType<typeof setTimeout>;
    keyDownTime: null | number;
    inputText: string;
    handleKeydown: (e: any) => void;
    render(): null;
}
declare const _default: import("react-redux").ConnectedComponent<typeof BarcodeScanner, import("react-redux").Omit<React.ClassAttributes<BarcodeScanner> & BarcodeScannerProps, "scanning" | "scanned" | "enabled">>;
export default _default;
