# react-usb-barcode-scanner

If you have a barcode scanner and need to integrate it into a react application.

### Demo
Application demo [http://www.barcode.sinyawskiy.ru/](http://www.barcode.sinyawskiy.ru/)
In the console, you can see the custom processing of the barcode in the middleware.

### Principle of operation

A handler is hung on the document keyup event.
It looks if the characters are typed quickly enough, stores them in memory, after the end of fast input, it will dispatch the event with the saved text.

### Default export from module
```
export {
    barcodeScannerMiddleware,
    barcodeScannerReducer,
    BARCODE_SCANNED,
    BARCODE_SCANNING,
    BarcodeScanner,
    enableBarcodeScanner,
    disableBarcodeScanner
}
```

### Required to use

Register in reducers.js
```
import { barcodeScannerReducer } from 'react-usb-barcode-scanner';

export default {
    ...,
    barcodeScanner: barcodeScannerReducer,
}
```

Register in middleware.js
```
import { applyMiddleware } from 'redux';
import { barcodeScannerMiddleware } from 'BarcodeScanner';
...
applyMiddleware([..., barcodeScannerMiddleware]) // <=  default middleware
```

In real application you need write yours middleware look like this:
```
import {BARCODE_SCANNED, BARCODE_SCANNING} from 'react-usb-barcode-scanner';

const barcodeScannerMiddleware = (store) => (next) => (action) => {
  // processing barcode need to be here
  if(action.type === BARCODE_SCANNED){
    const barcode = action.payload.data;
    store.dispatch(YourActionOnScanned(barcode));
  }
  if(action.type === BARCODE_SCANNING){
    store.dispatch(YourActionOnScanning());
  }
  return next(action);
};
```

Add to App.js
```
import {BarcodeScanner} from 'react-usb-barcode-scanner';
...
<root>
    ...
    <BarcodeScanner config={{
        intervalBetweenKeyPress: 100
        scanningEndTimeout: 200
        debug: true,
        ignoreOnInput: false,
        historyLength: 0,
    }}/>
    ...
</Root>
```

All processing takes place in the middleware, the necessary events are dispatched there and barcodes are processed.

### Example
See an example in the example folder :)

_TODO: On hooks, it has not yet been possible to implement the storage of an object of type timeout._

### Configuration example

Configuration `config.js`
```
export default {
  intervalBetweenKeyPress: 100 // if between presses is less than 100ms (scanner has about 25ms),
  scanningEndTimeout: 200, // clicks have stopped waiting for 200ms, then the input has stopped
  debug: true,
  historyLength: 5,
}
```

An optional `config` attribute is passed to the component:
```
import config from './config';

<BarcodeScanner config={config} />
```

### Project pages

[https://www.npmjs.com/package/react-usb-barcode-scanner](https://www.npmjs.com/package/react-usb-barcode-scanner)

[https://github.com/sinyawskiy/react-usb-barcode-scanner](https://github.com/sinyawskiy/react-usb-barcode-scanner) 
