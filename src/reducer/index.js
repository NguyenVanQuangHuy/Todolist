import { combineReducers } from "redux"
import ItemReducer from "./Itemrducer"
export default combineReducers({
    item: ItemReducer,
})