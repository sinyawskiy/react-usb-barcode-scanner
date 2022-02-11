import middleware from '@core/middleware';
import BARCODE_SCANNED from '@constants/index';
import BarcodeScanner from '@containers/index';
declare const reducer: import("redux").Reducer<import("./models").IState, import("redux").AnyAction>;
export { middleware, reducer, BARCODE_SCANNED, BarcodeScanner };
