import { PayloadAction } from '@reduxjs/toolkit';
import IState from '@models/IState';
import IActionScanned from "@models/IActionScanned";

export default (state: IState, action: PayloadAction<IActionScanned>) => {
    const { data, historyLength, historyDict={} } = action.payload;
    state.isBusy = false;
    state.data = data;
    if(historyLength) {
        // @ts-ignore
        state.history.push({
            ...historyDict,
            data: data,
            date: new Date().toISOString(),
        });
        if(state.history.length > historyLength){
            state.history.shift();
        }
    }
};
