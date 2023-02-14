import { createStore } from 'redux';
import marketReducer from '../Reducers/market'
const store = createStore(marketReducer);

export default store;