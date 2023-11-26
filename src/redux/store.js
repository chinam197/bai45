import { combineReducers, legacy_createStore as createStore } from "redux";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});
export const store = createStore(rootReducer);
