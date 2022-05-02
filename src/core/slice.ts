import { createSlice } from '@reduxjs/toolkit'
import {
  enable,
  disable,
  scanning,
  scanned,
  setHistoryInfo,
} from '@reducers/index'
import initialState from '@core/initialState'

export default createSlice({
  name: 'react-usb-barcode-scanner',
  initialState,
  reducers: {
    enable,
    disable,
    scanning,
    scanned,
    setHistoryInfo,
  }
})
