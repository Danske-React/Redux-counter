import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const counter = useSelector(state => state.counter);
    const cart = useSelector(state => state.cart);
    return (
        <div>
            <h1>hello</h1>
            <p>this is my header</p>
            <h1>cart value is {cart}</h1>

            <h2>The value of the counter is {counter}</h2>
        </div>
    )
}
export default Header