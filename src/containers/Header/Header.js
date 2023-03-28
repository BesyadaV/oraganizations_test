import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewOrganization, selectAllOrganizationsIds} from "../../redux/slices/organizationsSlice";
import {Box, Button, Typography} from "@mui/material";
import Search from "./Search";
const Header = () => {
  const organizationsListIds = useSelector(selectAllOrganizationsIds);
  const dispatch = useDispatch()

  const handleAddNew = () => {
    dispatch(addNewOrganization());
  }
  return (
    <Box
      sx={{
        display:'flex',
        alignItems: {xs:'start',md:'center'},
        justifyContent: 'space-between',
        gap: '30px',
        flexDirection: {xs:'column',md:'row'}
      }}
    >
      <Box
        sx={{
          display:'flex',
          alignItems: 'center',
          flexDirection: {xs:'column',md:'row'},
          gap: '30px'
        }}
      >
        <Typography variant="h5" component="h2">
          All organizations ({organizationsListIds.length})
        </Typography>
        <Search />
      </Box>
     <div>
       <Button variant="contained" onClick={handleAddNew}>Add new Organization</Button>
     </div>
    </Box>
  );
};

export default Header;
