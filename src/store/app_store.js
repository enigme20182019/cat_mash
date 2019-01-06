import { createStore } from "redux"
import {appReducer} from "../reducers/app_reducer"

export default createStore(appReducer)
