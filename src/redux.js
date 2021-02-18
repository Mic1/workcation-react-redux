import { createStore } from 'redux';

export const ACTIONS = {
  LOAD_LOCATION: 'LOAD_LOCATION',
};

const initialState = {
  
  locations: [],
};

function locationReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_LOCATION: {
      const {locationData} = action.payload;

      return {
        ...state,
        locations: locationData,
      };
    }

    default:
      return state;
  }
}

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export function createReduxStore() {
  const store = createStore(locationReducer, enableReduxDevTools);
  return store;
}
