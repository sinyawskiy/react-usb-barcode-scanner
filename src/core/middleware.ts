import { PayloadAction } from '@reduxjs/toolkit';
// import {
//     IStore,
// } from '@models/index';
import {BARCODE_SCANNED} from '@constants/actions';

const barcodeScannerMiddleware = () => (next: (action: PayloadAction<any>) => void) => (action: PayloadAction<any>) => { // (store: IStore) => (next) => (action) => {
    if(action.type === BARCODE_SCANNED){
        console.log(action.payload);
    }
    return next(action);
};

export default barcodeScannerMiddleware;
