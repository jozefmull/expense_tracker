import React, {useContext, useState, useEffect} from 'react'
import {Typography, Box} from '@mui/material'
import {Bar} from 'react-chartjs-2'
import {GlobalContext} from '../context/GlobalState'

import styles from '../css/CapitalGains.module.css'

const CapitalGains = () => {
    const {transactions} = useContext(GlobalContext)

    const Options = {
        legend: {
        display: "true",
        position: "top",
        maintainAspectRatio: false 
        }
    }
    
    const chartData = {
        labels:[...new Set(transactions.map((c) => c.date))],
        datasets:[
            {
            label: 'Income',
            data: transactions.filter((t) => t.type === 'Income').map((t) => t.amount),
            backgroundColor: '#14915f'
            },
            {
            label: 'Expense',
            data: transactions.filter((t) => t.type === 'Expense').map((t) => t.amount),
            backgroundColor: '#d14b4b'
            }],
        maintainAspectRatio: true,
        responsive: true,
    }

  return (
    <Box className={styles.cap_gains}>
        <Typography variant="h5">Capital gains</Typography>
        {transactions && transactions.length !== 0 ? (
            
          <Bar data={chartData} options={Options} height={"100%"}/> 
         ) : <p>No data</p>} 
    </Box>
  )
}

export default CapitalGains