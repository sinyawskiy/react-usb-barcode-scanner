import {PayloadAction} from '@reduxjs/toolkit';
import IState from '@models/IState';
import IActionSetHistoryInfo from "@models/IActionSetHistoryInfo";

export default (state: IState, action: PayloadAction<IActionSetHistoryInfo>) => {
    // const currentState = current(state);
    // return { ...currentState, historyDict: action.payload };
    state.historyInfo = action.payload;
};
