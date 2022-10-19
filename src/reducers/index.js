import todoReducers from './todoReducers'

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;