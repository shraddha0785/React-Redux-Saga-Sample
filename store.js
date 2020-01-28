import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import createSagaMiddleware from 'redux-saga'
import rootSaga  from './sideeffectslayer/mainAccountSaga'

const reducer = combineReducers({
  messageReducer
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store;