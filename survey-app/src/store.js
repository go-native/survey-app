import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { surveysReducer } from './reducers/surveysReducer';


export const store = createStore(surveysReducer, applyMiddleware(thunk));