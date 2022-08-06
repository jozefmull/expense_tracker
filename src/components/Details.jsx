import React from 'react'
import {Typography, Box} from '@mui/material'
import {Doughnut} from 'react-chartjs-2'
import useTransactions from '../useTransactions'

import {numberWithCommas} from '../utils/formatNumber'
import {Chart, registerables } from 'chart.js'

import styles from '../css/Details.module.css'

const Details = ({title}) => {
  const {total, chartData} = useTransactions(title)
  
  Chart.register(...registerables )

  const Options = {
    legend: {
      display: "true",
      position: "top",
      maintainAspectRatio: false 
    }
  };

  return (
    <Box className={title === 'Income' ? `${styles.income} ${styles.details}` : `${styles.expense} ${styles.details}`}>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{numberWithCommas(total)} €</Typography>
      </Box>
        {total !== 0 ? (
          <Doughnut data={chartData} options={Options} height={"100%"}/>
        ) : <p>No data</p>}
    </Box>
  )
}

export default Details