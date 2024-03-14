import { legacy_createStore as createStore} from 'redux'

import todoReducer from '../src/Reducer';

const store = createStore(todoReducer);

export default store;
