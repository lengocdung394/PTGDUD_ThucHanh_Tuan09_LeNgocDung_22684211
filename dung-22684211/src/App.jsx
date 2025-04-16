import { useState } from 'react'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../baitap/Redux/CounterActions';
import Usereducer from "../baitap/Usereducer"

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Usereducer></Usereducer>

      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>-</button>
      </div>
    </>
  )
}

export default App
