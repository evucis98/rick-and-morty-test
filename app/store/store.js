import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducers, enhancer);
