import './App.css';
import {BarcodeScanner, enableBarcodeScanner, disableBarcodeScanner} from 'react-usb-barcode-scanner';
import {connect} from 'react-redux';
import config from './config';
import {useState} from 'react';

const regex = /\n|\r\n|\n\r|\r/gm;

function App(props) {
  const getHtml = (data) => data.replace(regex, '<br>');
  const [barcodeScannerState, setBarcodeScannerState] = useState('enabled');
  const handleChange = (e) => {
    if (e.target.value==='enabled') {
      props.enableBarcodeScanner();
    } else {
      props.disableBarcodeScanner();
    }
    setBarcodeScannerState(e.target.value);
  }
  return (
    <div className="App">
      <div className="App-image">
        <p>
          <a href="https://www.npmjs.com/package/react-usb-barcode-scanner">react-usb-barcode-scanner</a>
        </p>
        <div className="select-container">
          <select onChange={handleChange} value={barcodeScannerState}>
            <option value="enabled">Enable barcode scanner</option>
            <option value="disabled">Disable barcode scanner</option>
          </select>
        </div>
        <div className="App-qr"></div>
      </div>
      <div className="App-info">
        <BarcodeScanner config={config} />
        { props.isBusy ? <p>Scanning...</p> : (props.data === ''? <p>Use barcode scanner</p>: (
          <><p>You are scanned:</p><div className="App-result" dangerouslySetInnerHTML={{ __html: getHtml(props.data) }} /></>
        )  )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ barcodeScanner: { isBusy, data } }) => ({ isBusy, data });

export default connect(mapStateToProps, {enableBarcodeScanner, disableBarcodeScanner})(App);
