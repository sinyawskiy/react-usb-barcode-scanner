import {
  applyMiddleware, combineReducers,
  createStore, compose,
} from 'redux';
import reducers from '../reducers';
import barcodeScannerMiddleware from '../middleware';
// import { barcodeScannerMiddleware } from 'react-usb-barcode-scanner'



const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(barcodeScannerMiddleware));
  const store = createStore(combineReducers(reducers), {}, enhancer);
  return { store };
};

export default configureStore;
