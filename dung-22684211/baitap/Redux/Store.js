import { createStore } from 'redux';
import counterReducer from './CounterReducer';

const Store = createStore(counterReducer);

export default Store;