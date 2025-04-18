import { INCREMENT, DECREMENT } from './CounterActions';

const initialState = {
  count: 0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;