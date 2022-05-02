# react-usb-barcode-scanner

Если у вас есть сканер баркода и вам надо его интегрировать в react приложение.

### Демо
Демо по применению [https://sinyawskiy.github.io/react-usb-barcode-scanner/](https://sinyawskiy.github.io/react-usb-barcode-scanner/)
В консоли можно увидеть кастомную обработку баркода в middleware.

### Принцип работы

На событие document keyup вешается обработчик. 
Он смотрит если символы достаточно быстро набираются, сохраняет их в памяти, после окончания быстрого набора диспатчит событие с текстом. 

### По умолчанию экспорт из модуля
```
export {
    barcodeScannerMiddleware,
    barcodeScannerReducer,
    BARCODE_SCANNED,
    BARCODE_SCANNING,
    BarcodeScanner,
    enableBarcodeScanner,
    disableBarcodeScanner,
    setHistoryInfo,
}
```

###  Для использования необходимо

Прописать в reducers.js
```
import { barcodeScannerReducer } from 'react-usb-barcode-scanner';

export default {
    ...,
    barcodeScanner: barcodeScannerReducer,
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
<Root>
    ...
    <BarcodeScanner config={{
        intervalBetweenKeyPress: 100,
        scanningEndTimeout: 200,
        debug: true,
        ignoreOnInput: false,
        historyLength: 0,
    }}/>
    ...
</Root>
```

Вся обработка происходит в миддлеваре, там диспатчатся необходимые события и обрабатываются баркоды.

### Пример
Пример смотрите в папке example :)

_TODO: На hook пока не получилось реализовать хранение объекта типа timeout. Нет обнуления информации при начале сканирования._

### Пример конфигурации

Конфигурация `config.js`
```
export default {
  intervalBetweenKeyPress: 100, // если между нажатиями меньше 100 мс (у сканера примерно 25 мс),
  scanningEndTimeout: 200,  // нажатия прекратились ждем 200 мс, то ввод прекратился
  debug: true,
  historyLength: 5,
}
```

Необязательный аттрибут `config` передаётся в компонент:
```
import config from './config'; 

<BarcodeScanner config={config} />
```

### Использование history

Необходимо в конфиг файле установить параметр historyLength: 5, количество записей в истории, самая последняя самая новая.

Вся история лежит в сторе баркод сканера в массиве history. В виде объекта, даты date в формате ISO 8601, и строки data которая была отсканирована. 

Чтобы добавить в историю, например имя пользователя или идетификатор, используется action setHistoryDict, который в payload принимает
dict который потом расдистракчивается в history при сканировании.

### Страницы проекта

[https://www.npmjs.com/package/react-usb-barcode-scanner](https://www.npmjs.com/package/react-usb-barcode-scanner)
[https://github.com/sinyawskiy/react-usb-barcode-scanner](https://github.com/sinyawskiy/react-usb-barcode-scanner)
