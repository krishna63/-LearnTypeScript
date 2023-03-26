import { createContext, useReducer } from "react";
import appStore from "../reducers";

const defaultContextValue = createContext(appStore.getState())

const useAppContext = () => {
    const [appState, dispatchers] = useReducer(appStore, appStore.getState())
}