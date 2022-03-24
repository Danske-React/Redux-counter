import './App.css';
import { Increment, Decrement } from "./actions"
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to Redux-Counter</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(Increment())}> add 1</button>
      <button onClick={() => dispatch(Decrement())}>sub 1</button>

    </div>
  );
}

export default App;
