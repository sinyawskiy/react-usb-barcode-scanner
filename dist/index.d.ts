import barcodeScannerMiddleware from '@core/middleware';
import BARCODE_SCANNED from '@constants/index';
import BarcodeScanner from '@containers/index';
declare const barcodeScannerReducer: import("redux").Reducer<import("./models").IState, import("redux").AnyAction>;
export { barcodeScannerMiddleware, barcodeScannerReducer, BARCODE_SCANNED, BarcodeScanner };
