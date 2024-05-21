import store from "../../Store/store";
import { setMapScriptLoaded } from "../../Store/Actions/Configuration/configurationActions";

export const setMapScriptLoadedHnd = (mapScriptLoaded) => {
    store.dispatch(setMapScriptLoaded(mapScriptLoaded));
}
