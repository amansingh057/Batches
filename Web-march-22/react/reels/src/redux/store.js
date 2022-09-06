import { createStore, applyMiddleware } from 'redux';
import { getFirebase, firebaseReducer } from 'react-redux-firebase';
import authReducer from './reducer/authReducer';
import {combineReducers} from "redux";
import thunk from "redux-thunk";
const rootreducer = combineReducers({
        auth: authReducer,
        firebase: firebaseReducer
})
const reduxStore = createStore(rootreducer,
        applyMiddleware
                (thunk.withExtraArgument({ getFirebase })));
//redux binding for firebase );
export default reduxStore;

