import React from 'react';
import {useSelector} from "react-redux";
import {selectAllOrganizationsIds, selectFilteredOrganizationsIds} from "../../redux/slices/organizationsSlice";
import Organization from "../../components/Organization/Organization";
import {Grid, Typography} from "@mui/material";

const Organizations = () => {
  const organizationsListIds = useSelector(selectFilteredOrganizationsIds);
  console.log(organizationsListIds)
  if (!organizationsListIds.length) {
    return (
      <div>
        <Typography variant={'h3'}>No organizations yet.</Typography>
      </div>
    )
  }

  return (
    <Grid container spacing={2}>
      {organizationsListIds.map(id => (
        <Grid item xs={12} md={6} lg={4}>
          <Organization key={id} id={id} />
        </Grid>
      ))}
    </Grid>
  )
    ;
};

export default Organizations;
