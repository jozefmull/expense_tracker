import React,{useContext, useState, useEffect} from 'react'
import {Typography, Grid, Box} from '@mui/material'
import {GlobalContext} from '../context/GlobalState'

import {numberWithCommas} from '../utils/formatNumber'

import Form from './Form'
import TransactionList from './TransactionList'

import styles from '../css/Main.module.css'

const Main = () => {
  const {transactions} = useContext(GlobalContext);

    const [incomeTotal, setincomeTotal] = useState(0)
    const [expenseTotal, setexpenseTotal] = useState(0)

    useEffect(() => {
      if (transactions) {
        setincomeTotal(transactions.filter((t) => t.type === 'Income').reduce((acc,curr) => acc+=curr.amount, 0))
        setexpenseTotal(transactions.filter((t) => t.type === 'Expense').reduce((acc,curr) => acc+=curr.amount, 0))
      }
    }, [transactions])
    
  return (
    <Box className={styles.main}>
        <Typography align="left" variant="h5">Total Balance: <span style={{color: incomeTotal - expenseTotal < 0 ? 'rgb(209, 75, 75)' : '#247a54'}}>
          {numberWithCommas(incomeTotal - expenseTotal)} €</span>
        </Typography>
            {/* <Typography vartiant="subtitle1" style={{lineHeight:'1.5em', marginTop:'20px'}}>
                InfoCard
                Try saying:
            </Typography> */}
            {/* <Divider/> */}
        <Form />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TransactionList/>
          </Grid> 
        </Grid>
    </Box>
  )
}

export default Main