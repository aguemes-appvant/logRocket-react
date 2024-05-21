import {
    DEVICES_ADD,
    DEVICES_DEL,
    DEVICE_FILTER
} from '../../Actions/Devices/index.js';

const initState = {
    list: [
        {id: 1, model: "iphone 13", color: "pink"},
        {id: 2, model: "iphone 15", color: "blue"},
        {id: 3, model: "iphone 10", color: "red"},
        {id: 4, model: "samsung galaxy", color: "pink"}
    ],
    filter: ''
};

const devicesReducer = (state = initState, action) => {
    switch (action.type) {
        case DEVICES_ADD:
            console.log("DEVICES_ADD", action.device, action.deviceId)
            return {
                ...state,
                list: [...state.list, {...action.device, id: action.deviceId}]
            }
        case DEVICES_DEL:
            console.log("DEVICES_DEL",  action.deviceId)
            return {
                ...state,
                list: state.list.filter(device => device.id !== action.deviceId)
            }
        case DEVICE_FILTER:
            console.log("DEVICE_FILTER",  action.filter)
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}

export default devicesReducer;