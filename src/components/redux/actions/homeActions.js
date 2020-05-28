export const CHANGE_SCREEN = "CHANGE_SCREEN";

export const changeScreen = (screen) => ({
	type: CHANGE_SCREEN,
	payload: screen,
});




export function changeScreenFunction(screen) {
	return (dispatch) => {
		dispatch(changeScreen(screen));
	};
}

