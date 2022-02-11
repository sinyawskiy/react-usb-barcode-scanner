import barcodeScannerMiddleware from '@core/middleware';
import slice from '@core/slice';
import BARCODE_SCANNED from '@constants/index';
import BarcodeScanner from '@containers/index';
const { reducer:barcodeScannerReducer } = slice;

export {
    barcodeScannerMiddleware,
    barcodeScannerReducer,
    BARCODE_SCANNED,
    BarcodeScanner
}
