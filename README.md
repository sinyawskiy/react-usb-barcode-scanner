Для использования необходимо:

Прописать в reducers.js
```
import barcodeScanner from 'BarcodeScanner/reducer';

export default {
    ...,
    barcodeScanner,
}
```

Прописать в middleware.js
```
import { applyMiddleware } from 'redux';
import { barcodeScannerMiddleware } from 'BarcodeScanner';

applyMiddleware([..., barcodeScannerMiddleware])
```

Добавить в App.js
```
<BarcodeScanner />
```

Вся обработка происходит в миддлеваре, там диспатчатся необходимые события и обрабатываются баркоды. 
