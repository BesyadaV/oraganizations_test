import React from 'react';
import {useSelector} from "react-redux";
import {selectOrganizationById} from "../../redux/slices/organizationsSlice";
import {Card, CardContent, Typography} from "@mui/material";
import styles from './Organization.module.scss'

const Organization = ({id}) => {
  const organizationData = useSelector(selectOrganizationById(id));
  console.log(organizationData);
  return (
    <Card className={styles.card}>
      <CardContent>

        <Typography variant="h5" component="div">
          {organizationData.name}
        </Typography>
        <Typography color="text.secondary">
          Licenses
        </Typography>
        <div className={styles.organizationDetails}>
          <div>
            <Typography color="text.secondary">
              Tracking
            </Typography>
            <Typography color="text.secondary">
              In use: {organizationData.tracking.inUse}
            </Typography>
            <Typography color="text.secondary">
              Assigned: {organizationData.tracking.assigned}
            </Typography>
          </div>
          <div>
            <Typography color="text.secondary">
              Protection
            </Typography>
            <Typography color="text.secondary">
              In use: {organizationData.protection.inUse}
            </Typography>
            <Typography color="text.secondary">
              Assigned: {organizationData.protection.assigned}
            </Typography>
          </div>
        </div>
        {/*<Typography variant="body2">*/}
        {/*  well meaning and kindly.*/}
        {/*  <br />*/}
        {/*  {'"a benevolent smile"'}*/}
        {/*</Typography>*/}
      </CardContent>
    </Card>
  );
};

export default Organization;
