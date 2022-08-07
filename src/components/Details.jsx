import React from 'react'
import {Typography, Box} from '@mui/material'
import {Doughnut} from 'react-chartjs-2'
import useTransactions from '../useTransactions'

import {numberWithCommas} from '../utils/formatNumber'
import {Chart, registerables } from 'chart.js'

import PaidIcon from '@mui/icons-material/Paid';
import MoneyOff from '@mui/icons-material/MoneyOff';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';

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
        <Typography variant="h6">{title !== 'Income' ? (<MoneyOff/>) : (<PaidIcon/>)}{title}</Typography>
        <Typography variant="h5">{numberWithCommas(total)} <EuroOutlinedIcon/></Typography>
      </Box>
        {total !== 0 ? (
          <Doughnut data={chartData} options={Options} height={"100%"}/>
        ) : <p>No data</p>}
    </Box>
  )
}

export default Details