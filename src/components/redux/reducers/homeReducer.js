import { CHANGE_SCREEN } from "../actions/homeActions";

const initialState = {
  screen: "Main",

};

export default function homeReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SCREEN:
			return Object.assign({}, state, {
				screen: action.payload,
      });
      
		default:
			// ALWAYS have a default case in a reducer
			return state;
	}
}
