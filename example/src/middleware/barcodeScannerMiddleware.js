import {BARCODE_SCANNED} from 'react-usb-barcode-scanner';
import {exampleBarcodeAction} from '../actions/exampleBarcodeAction';

const barcodeScannerMiddleware = (store) => (next) => (action) => {
  if(action.type === BARCODE_SCANNED){
    console.log(action, BARCODE_SCANNED);
    const barcode = action.payload.data;
    // processing barcode need to be here
    store.dispatch(exampleBarcodeAction(barcode));
  }
  return next(action);
};

export default barcodeScannerMiddleware;
