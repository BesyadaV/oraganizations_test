import {createSlice} from '@reduxjs/toolkit'
import {uuidv4} from "../../utils/uuid";

const initialState = {
  byId: {},
  allIds: [],
}

export const counterSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    addNewOrganization: (state) => {
      const id = uuidv4();
      const mockData = {inUse: 1245, assigned: 1200};

      const data = {
        name: `Organization Name ${state.allIds.length + 1}`,
        tracking: {...mockData},
        protection: {...mockData}
      }
      state.allIds.push(id);
      state.byId[id] = {id, ...data}
    },

  },
})

export const {addNewOrganization} = counterSlice.actions

export const selectAllOrganizationsIds = (state) => state.organizations.allIds

//can be improved with reselect
export const selectFilteredOrganizationsIds= (state) => {
 const {allIds, byId} = state.organizations;
 const {search} = state.filters;
 return allIds.filter(id=>byId[id].name.includes(search))
}
export const selectOrganizationById = (id) => (state) => state.organizations.byId[id]

export default counterSlice.reducer
