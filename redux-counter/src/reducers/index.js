import CounterReducer from "./counter";
import { combineReducers} from "redux";

const AllReducers = combineReducers ({
    counter: CounterReducer
})

export default AllReducers