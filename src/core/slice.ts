import { createSlice } from '@reduxjs/toolkit'
import {
  enable,
  disable,
  scanning,
  scanned,
} from '@reducers/index'
import initialState from '@core/initialState'

export default createSlice({
  name: 'barcodeScanner',
  initialState,
  reducers: {
    enable,
    disable,
    scanning,
    scanned,
  }
})
