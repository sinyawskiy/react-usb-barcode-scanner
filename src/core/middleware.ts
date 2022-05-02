import { PayloadAction } from '@reduxjs/toolkit';
// import {
//     IStore,
// } from '@models/index';
import {BARCODE_SCANNED} from '@constants/actions';

// (store: IStore) => (next) => (action) => {
const barcodeScannerMiddleware = () => (next: (action: PayloadAction<any>) => void) => (action: PayloadAction<any>) => {
    if(action.type === BARCODE_SCANNED){
        // TODO: use processing with barcode here
        console.log('Processed barcode', action.payload.data);
    }
    return next(action);
};

export default barcodeScannerMiddleware;
