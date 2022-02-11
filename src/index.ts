import middleware from '@core/middleware';
import slice from '@core/slice';
import BARCODE_SCANNED from '@constants/index';
import BarcodeScanner from '@containers/index';
const { reducer } = slice;

export {
    middleware,
    reducer,
    BARCODE_SCANNED,
    BarcodeScanner
}
