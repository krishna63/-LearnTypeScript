import { configureStore } from "@reduxjs/toolkit";
import { AnyAction } from 'redux'

const defaultActiveStep = 0;

const activeStepReducer = (state = defaultActiveStep, userAction: AnyAction) => {
  const { type, payload } = userAction;
  switch (type) {
    case "increment":
      return payload + 1;
    default:
      return state;
  }
};

const appStore = configureStore({
  reducer: {
    currentStep: activeStepReducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
