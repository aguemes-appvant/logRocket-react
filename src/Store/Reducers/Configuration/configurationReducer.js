import {
    CONFIG_MAP_SCRIPT_LOADED
} from '../../Actions/Configuration/index.js';

const initState = {
    mapScriptLoaded: false
};

const configurationReducer = (state = initState, action) => {
    switch (action.type) {
        case CONFIG_MAP_SCRIPT_LOADED:
            console.log("CONFIG_MAP_SCRIPT_LOADED", action.mapScriptLoaded)
            return {
                ...state,
                mapScriptLoaded: action.mapScriptLoaded
            }
        default:
            return state;
    }
}

export default configurationReducer;