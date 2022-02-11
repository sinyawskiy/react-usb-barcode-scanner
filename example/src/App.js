import './App.css';
import {BarcodeScanner} from 'react-usb-barcode-scanner';
import {connect} from 'react-redux';
import config from './config';

const regex = /\n|\r\n|\n\r|\r/gm;

function App(props) {
  const getHtml = (data) => data.replace(regex, '<br>');
  return (
    <div className="App">
      <div className="App-image">
        <p>
          <a href="https://www.npmjs.com/package/react-usb-barcode-scanner">react-usb-barcode-scanner</a>
        </p>
        <div className="App-qr"></div>
      </div>
      <div className="App-info">
        <BarcodeScanner config={config} />
        { props.isBusy ? <p>Сканирую</p> : (props.data === ''? <p>Воспользуйтесь сканером</p>: (
          <><p>Вы отсканировали</p><div className="App-result" dangerouslySetInnerHTML={{ __html: getHtml(props.data) }} /></>
        )  )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ barcodeScanner: { isBusy, data } }) => ({ isBusy, data });

export default connect(mapStateToProps, null)(App);
