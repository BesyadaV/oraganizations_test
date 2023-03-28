import {combineReducers} from "@reduxjs/toolkit";
import filtersReducer from './filtersSlice'
import organizationsReducer from './organizationsSlice'

export const rootReducer = combineReducers({
  filters: filtersReducer,
  organizations: organizationsReducer
})
