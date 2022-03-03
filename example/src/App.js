import './App.css';
import {BarcodeScanner, enableBarcodeScanner, disableBarcodeScanner, setHistoryDict} from 'react-usb-barcode-scanner';
import {connect} from 'react-redux';
import config from './config';
import {useEffect, useState} from 'react';

const regex = /\n|\r\n|\n\r|\r/gm;
const defaultUserName = 'John Doe';


function App(props) {
  const getHtml = (data) => data.replace(regex, '<br>');
  const [barcodeScannerState, setBarcodeScannerState] = useState('enabled');
  const [showHistory, setShowHistory] = useState(false);
  const [inputState, setInputState] = useState('');
  const [userName, setUserName] = useState(defaultUserName);

  useEffect(()=>{
    props.setHistoryDict({
      username: defaultUserName,
    })
  }, []); // once on mount

  const handleChange = (e) => {
    if (e.target.value==='enabled') {
      props.enableBarcodeScanner();
    } else {
      props.disableBarcodeScanner();
    }
    setBarcodeScannerState(e.target.value);
  }
  const renderHeader = (historyItems) => {
    if(historyItems.length>0) {
      const result = []
      const keys = Object.keys(historyItems[0])
      for (let item in keys) {
        result.push(
          <td>{keys[item]}</td>
        )
      }
      return <thead><tr>{result}</tr></thead>;
    }
    return null;
  }
  return (
    <div className="App">
      <div className="App-image">
        <div className="App-options">
          <p>
            <a href="https://www.npmjs.com/package/react-usb-barcode-scanner">react-usb-barcode-scanner</a>
          </p>
          <div className="control-container">
            <select onChange={handleChange} value={barcodeScannerState}>
              <option value="enabled">Enable barcode scanner</option>
              <option value="disabled">Disable barcode scanner</option>
            </select>
          </div>
          <div className="control-container">
            <input type="text" value={inputState} onChange={
            (e) => setInputState(e.target.value)
            } placeholder="Ignore dispatch scanned if input is focused" />
          </div>
          <div className="control-container">
            <input type="text" value={userName} onChange={
              (e) => {
                setUserName(e.target.value);
                props.setHistoryDict({ username: e.target.value });
              }
            } placeholder="Username for history" />
          </div>
        </div>
        <div className="App-barcodes">
          <div className="App-qr"></div>
          <div className="App-barcode"></div>
        </div>
      </div>
      <div className="App-info">
        <BarcodeScanner config={config} />
        { props.isBusy ? <p>Scanning...</p> : (props.data === ''? <p>Use barcode scanner</p>: (
          <>
            <p>You are scanned:</p>
          <div className="App-result" dangerouslySetInnerHTML={{ __html: getHtml(props.data) }} /></>
        )  )}
        {
          props.barcodeHistory.length > 0 && (
            <>
        <div className="App-showHistory">{
          <a type="button" onClick={
            (e) => {
              setShowHistory(!showHistory);
            }
          }>{showHistory? 'Hide history': 'Show history'}</a>
        }</div>
        {
          showHistory && (
            <div className="App-history">
              {
                <table>
                  {
                    renderHeader(props.barcodeHistory)
                  }
                  <tbody>
                  {
                    props.barcodeHistory.map((el) => {
                      const result = []
                      const keys = Object.keys(el)
                      for (let item in keys) {
                        result.push(
                          <td>{el[keys[item]]}</td>
                        )
                      }
                      return <tr key={`history_${el.date}`}>{result}</tr>;
                    })
                  }
                  </tbody>
                </table>
              }
            </div>
          )
        }
            </>
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ barcodeScanner: { isBusy, data, history } }) => ({ isBusy, data, barcodeHistory: history });

export default connect(mapStateToProps, {enableBarcodeScanner, disableBarcodeScanner, setHistoryDict})(App);
