import CounterReducer from "./counter";
import CartReducer from "./cart";
import { combineReducers} from "redux";

const AllReducers = combineReducers ({
    counter: CounterReducer,
    cart: CartReducer
})

export default AllReducers