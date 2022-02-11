import { PayloadAction } from '@reduxjs/toolkit';
import IState from '@models/IState';
import IActionScanned from "@models/IActionScanned";

export default (state: IState, action: PayloadAction<IActionScanned>) => {
    state.isBusy = false;
    state.data = action.payload.data;
};
