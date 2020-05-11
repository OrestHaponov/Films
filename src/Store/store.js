import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./Reducer/rootReducer";


const persistConfig ={
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = {}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const persistor = persistStore(store);

export {store, persistor};