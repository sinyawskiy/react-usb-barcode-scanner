import barcodeScannerMiddleware from '@core/middleware';
import slice from '@core/slice';
import BarcodeScanner from '@containers/index';
import { BARCODE_SCANNED, BARCODE_SCANNING } from '@constants/actions';
const { reducer:barcodeScannerReducer } = slice;

export {
    barcodeScannerMiddleware,
    barcodeScannerReducer,
    BARCODE_SCANNED,
    BARCODE_SCANNING,
    BarcodeScanner
}
