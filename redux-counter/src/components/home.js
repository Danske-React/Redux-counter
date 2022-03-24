
import { Increment, Decrement, Reset } from "../actions"
import { useSelector, useDispatch } from 'react-redux';
import Header from './header';


function Home() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div >
            <Header />

            <h1>Counter : {counter}</h1>
            <button onClick={() => dispatch(Increment())}> add 1</button>
            <button onClick={() => dispatch(Decrement())}>sub 1</button>
            <button onClick={() => dispatch(Reset())}>Reset</button>

        </div>
    )
}

export default Home