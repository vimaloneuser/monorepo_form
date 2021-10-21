import { createStore, applyMiddleware } from 'redux'
import { centerReducer } from './reducers'
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    const store = createStore(centerReducer, applyMiddleware(
        thunkMiddleware
    ))
    return store
}