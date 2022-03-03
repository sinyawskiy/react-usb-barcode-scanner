import {current, PayloadAction} from '@reduxjs/toolkit';
import IState from '@models/IState';
import IActionSetHistoryDict from "@models/IActionSetHistoryDict";

export default (state: IState, action: PayloadAction<IActionSetHistoryDict>) => {
    // const currentState = current(state);
    // return { ...currentState, historyDict: action.payload };
    state.historyDict = action.payload;
};
