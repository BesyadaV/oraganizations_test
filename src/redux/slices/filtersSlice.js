import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  search: ''
}

export const counterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearchString: (state, {payload}) => {
      state.search =payload.search
    },
  },
})

export const {changeSearchString} = counterSlice.actions
export const selectSearch = (state) => state.filters.search

export default counterSlice.reducer
