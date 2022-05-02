import { IState } from '@models/index';

const initialState: IState = {
    enabled: true,
    isBusy: false,
    data: '',
    history: [],
    historyInfo: {},
};

export default initialState;
