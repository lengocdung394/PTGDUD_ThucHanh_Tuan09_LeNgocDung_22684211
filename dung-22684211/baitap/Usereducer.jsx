import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case '+':
      return { count: state.count + 1 };
    case '-':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{backgroundColor: "lightblue", width:"400px", borderRadius: "10px", margin: "auto",textAlign: 'center'}}>
      <h1>{state.count}</h1>
      <button style={{backgroundColor: "green",width:"100px"}} onClick={() => dispatch({ type: '+' })}>+</button>
      <button style={{backgroundColor: "red", width:"100px"}} onClick={() => dispatch({ type: '-' })}>-</button>
    </div>
  );
}


export default Usereducer