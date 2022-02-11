import { PayloadAction } from '@reduxjs/toolkit';
import { IActionEnable, IActionDisable, IActionScanning, IActionScanned, IState } from '@models/index';
export declare type IActions = IActionEnable | IActionDisable | IActionScanning | IActionScanned;
export default interface IStore {
    dispatch: (action: PayloadAction<IActions | undefined>) => void;
    getState: () => ({
        barcodeScanner: IState;
    });
}
