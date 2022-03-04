import { PayloadAction, current } from '@reduxjs/toolkit';
import IState from '@models/IState';
import IActionScanned from "@models/IActionScanned";


export default (state: IState, action: PayloadAction<IActionScanned>) => {
    const { data, historyLength } = action.payload;
    state.isBusy = false;
    state.data = data;
    if(historyLength) {
        // @ts-ignore
        const currentState = current(state);
        const history = [...currentState.history];
        history.push({
            historyDict: currentState.historyDict,
            data: data,
            timestamp: new Date().getTime(),
        });
        if(history.length > historyLength){
            history.shift();
        }
        state.history = history;
    }
};
