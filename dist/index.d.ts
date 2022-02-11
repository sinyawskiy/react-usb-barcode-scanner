import barcodeScannerMiddleware from '@core/middleware';
import BarcodeScanner from '@containers/index';
import { BARCODE_SCANNED, BARCODE_SCANNING } from '@constants/actions';
declare const barcodeScannerReducer: import("redux").Reducer<import("./models").IState, import("redux").AnyAction>;
export { barcodeScannerMiddleware, barcodeScannerReducer, BARCODE_SCANNED, BARCODE_SCANNING, BarcodeScanner };
