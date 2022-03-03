import barcodeScannerMiddleware from '@core/middleware';
import BarcodeScanner from '@containers/index';
import { BARCODE_SCANNED, BARCODE_SCANNING } from '@constants/actions';
import { enable as enableBarcodeScanner, disable as disableBarcodeScanner, setHistoryDict } from '@actions/actions';
declare const barcodeScannerReducer: import("redux").Reducer<import("./models").IState, import("redux").AnyAction>;
export { barcodeScannerMiddleware, barcodeScannerReducer, BARCODE_SCANNED, BARCODE_SCANNING, BarcodeScanner, enableBarcodeScanner, disableBarcodeScanner, setHistoryDict, };
