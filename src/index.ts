import barcodeScannerMiddleware from '@core/middleware';
import slice from '@core/slice';
import BarcodeScanner from '@containers/index';
import { BARCODE_SCANNED, BARCODE_SCANNING } from '@constants/actions';
import { enable as enableBarcodeScanner, disable as disableBarcodeScanner } from '@actions/actions'
const { reducer:barcodeScannerReducer } = slice;

export {
    barcodeScannerMiddleware,
    barcodeScannerReducer,
    BARCODE_SCANNED,
    BARCODE_SCANNING,
    BarcodeScanner,
    enableBarcodeScanner,
    disableBarcodeScanner
}
