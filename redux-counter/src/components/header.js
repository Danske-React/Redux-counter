import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const counter = useSelector(state => state.counter);
    return (
        <div>
            <h1>hello</h1>
            <h2>The value of the counter is {counter}</h2>
        </div>
    )
}
export default Header