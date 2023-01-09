import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = { counter: 10 }, action) => {
	//synchronous function
	// we should not mutate the original state

	if (action.type === "INC") {
		return { counter: state.counter + 1 };
	}

	if (action.type === "DEC") {
		return { counter: state.counter - 1 };
	}

	if (action.type === "ADD") {
		return { counter: state.counter + action.payload };
	}

	return state;
};

const store = createStore(reducerFn);
export default store;
