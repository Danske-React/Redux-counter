import { AddItem, RemoveItem } from "../actions"
import { useSelector, useDispatch } from 'react-redux';

function DisplayCart() {
    const counter = useSelector(state => state.counter);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div >
            <h1>Cart Value : {cart}</h1>
            <h1> counter value : {counter}</h1>
            <button onClick={() => dispatch(AddItem())}> add product</button>
            <button onClick={() => dispatch(RemoveItem())}>Remove product</button>
        </div>
    )

}

export default DisplayCart