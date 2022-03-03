import { IState } from '@models/index';

const initialState: IState = {
    enabled: true,
    isBusy: false,
    data: '',
    history: [],
    historyDict: {},
};

export default initialState;
