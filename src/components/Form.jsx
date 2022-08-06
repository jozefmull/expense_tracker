import React, {useState, useContext} from 'react'
import {TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material'

import {v4 as uuidv4} from 'uuid'
import {GlobalContext} from '../context/GlobalState'
import {incomeCategories, expenseCategories} from '../constants/categories'

import formatDate from '../utils/formatDate'

import styles from '../css/Form.module.css'

let initialState = {
    amount: '',
    category:'',
    type:'',
    date: formatDate(new Date())
}

const Form = () => {
  const {addTransaction} = useContext(GlobalContext);

    const [formData, setformData] = useState(initialState)

    let selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

    const onSubmit = (e) => {
        e.preventDefault()
    
        const newTransaction = {...formData, amount:Number(formData.amount), id: uuidv4()}
    
        addTransaction(newTransaction)
        setformData(initialState)
    }
  return (
    <Grid container spacing={2} className={styles.form}>
        <Grid item xs={12}>
            {/* <Typography align="center" variant="subtitle2" gutterBottom>...</Typography> */}
        </Grid>
        <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
                <InputLabel>Type</InputLabel>
                <Select required value={formData.type} onChange={(e) => setformData({...formData, type: e.target.value})}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
                <InputLabel>Category</InputLabel>
                <Select 
                    required 
                    value={formData.category} 
                    onChange={(e) => setformData({...formData, category: e.target.value})}>
                    {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField 
                variant="standard"
                type="number"
                label="Amount"
                fullWidth
                className={styles.forminput}
                value={formData.amount} 
                onChange={(e) => setformData({...formData, amount: e.target.value})}
                />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            variant="standard" 
            type="date" 
            label="Date" 
            fullWidth 
            value={formData.date} 
            onChange={(e) => setformData({...formData, date: formatDate(e.target.value)})}
           />
        </Grid>
        <Grid item xs={12} align='center'>
            <Button type='submit' className={styles.button} color="primary" variant="contained" size="medium" onClick={onSubmit}>Add Transaction</Button>
        </Grid>
    </Grid>
  )
}

export default Form