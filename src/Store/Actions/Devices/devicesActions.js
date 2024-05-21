import { 
    DEVICES_ADD, 
    DEVICES_DEL,
    DEVICE_FILTER
} from ".";

export const addDevice = (device, deviceId) => {
    return {
        type: DEVICES_ADD,
        device,
        deviceId
    }
}

export const delDevice = (deviceId) => {
    return {
        type: DEVICES_DEL,
        deviceId
    }
}

export const setFilterDevice = (filter) => {
    return {
        type: DEVICE_FILTER,
        filter
    }
}
