import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducres/rootReducer';

const middleWares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));

export default store;