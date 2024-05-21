import {
    CONFIG_MAP_SCRIPT_LOADED
} from '.';


export const setMapScriptLoaded = (mapScriptLoaded) => {
    return {
        type: CONFIG_MAP_SCRIPT_LOADED,
        mapScriptLoaded
    }
}