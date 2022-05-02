import reducer from '@core/slice'

const { actions } = reducer

export const {
    enable,
    disable,
    scanning,
    scanned,
    setHistoryInfo,
} = actions

export default actions;
