import { combineReducers } from 'redux';
import {socialNetworkContract} from './socialNetworkContract';

const rootReducer = combineReducers({
    socialNetworkContract:socialNetworkContract,
});

export default rootReducer;
