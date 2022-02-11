# react-usb-barcode-scanner

Если у вас есть сканер баркода и вам надо его интегрировать в react приложение.

### Принцип работы

На событие document keyup вешается обработчик. 
Он смотрит если символы достаточно быстро набираются, сохраняет их в памяти, после окончания быстрого набора диспатчит событие с текстом. 

###  Для использования необходимо

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

### Пример
Пример смотрите в папке example :)

_TODO: enable, disable не работает. На hook пока не получилось реализовать хранение объекта типа timeout._

### Пример конфигурации

Конфигурация `config.js`
```
export default {
  intervalBetweenKeyPress: 100, // если между нажатиями меньше 100 мс (у сканера примерно 25 мс),
  scanningEndTimeout: 200,  // нажатия прекратились ждем 200 мс, то ввод прекратился
  debug: true,
}
```

Необязательный аттрибут `config` передаётся в компонент:
```
import config from './config'; 

<BarcodeScanner config={config} />
```

### Страницы проекта

[https://www.npmjs.com/package/react-usb-barcode-scanner](https://www.npmjs.com/package/react-usb-barcode-scanner)
[https://github.com/sinyawskiy/react-usb-barcode-scanner](https://github.com/sinyawskiy/react-usb-barcode-scanner)
