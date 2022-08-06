import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid} from '@mui/material'

import styles from '../css/Balance.module.css'

const Balance = () => {
  return (
    <Card className={`${styles.balance_card}`}>
         <CardHeader title="Balance" />
        {/*<CardContent>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Grid item xs={8}>
                    <Typography>xs=8</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>xs=4</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>xs=4</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>xs=8</Typography>
                </Grid>
            </Grid>
            <Typography variant="h5">$50</Typography>
        </CardContent> */}
    </Card>  )
}

export default Balance