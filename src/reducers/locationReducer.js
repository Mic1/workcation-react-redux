import { ACTIONS } from "../actions";

const INITIAL_STATE = {
  locations: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case ACTIONS.LOAD_LOCATIONS: {    
      return {
        ...state,
        locations: action.payload,
      };
    }
    default:
      return state;
  }
};
