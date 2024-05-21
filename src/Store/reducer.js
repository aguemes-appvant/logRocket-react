import { combineReducers } from "redux";
import configurationReducer from "./Reducers/Configuration/configurationReducer";
import devicesReducer from "./Reducers/Devices/devicesReducers";

export default combineReducers({
    configuration: configurationReducer,
    devices:devicesReducer
})