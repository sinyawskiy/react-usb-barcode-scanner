import { BARCODE_SCANNED } from './actions';
import { BarcodeTypes } from '../../common/scannableItemType';
import { load } from '../../actions/barcode';

const REGEX_BARCODE = new RegExp('ID OPM:\\s?(?<opmid>\\w+)|Barcode:\\s?(?<barcode>\\d+)', 'gmi');

const barcodeScannerMiddleware = (store) => (next) => (action) => {
    if(action.type === BARCODE_SCANNED){
        let m;
        let source = BarcodeTypes.D;
        let barcode;
        let opmId;
        let isOpm = false;
        while ((m = REGEX_BARCODE.exec(action.payload)) !== null) {
            isOpm = true;
            if(m.groups.opmid){
                opmId = m.groups.opmid;
            }
            if(m.groups.barcode){
                barcode = m.groups.barcode;
            }
        }
        if(isOpm) {
            if (opmId) {
                source = BarcodeTypes.OPM;
                if (barcode) {
                    source = BarcodeTypes.QR;
                }
            } else {
                if (barcode) {
                    source = BarcodeTypes.QR;
                }
            }
        }else{
            barcode = action.payload;
        }
        store.dispatch(load(
          source === BarcodeTypes.OPM? opmId: barcode,
          undefined,
          source,
          source === BarcodeTypes.QR && opmId? { opmId }: undefined)
        );
    }
    return next(action);
};

export default barcodeScannerMiddleware;
