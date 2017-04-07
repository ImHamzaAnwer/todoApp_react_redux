import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {todoReducer} from './reducers/reducer';

const rootReducer = combineReducers({
    todoReducer
});

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer,middleware);