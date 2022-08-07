import React, {useState, useContext} from 'react'
import {TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material'

import {v4 as uuidv4} from 'uuid'
import {GlobalContext} from '../context/GlobalState'
import {incomeCategories, expenseCategories} from '../constants/categories'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import formatDate from '../utils/formatDate'

import styles from '../css/Form.module.css'

let initialState = {
    amount: '',
    category:'',
    type:'',
    date: formatDate(new Date()),
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
    <form onSubmit={onSubmit}>
        <Grid container spacing={2} className={styles.form}>
            <Grid item xs={12}>
                {/* <Typography align="center" variant="subtitle2" gutterBottom>...</Typography> */}
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select  
                        value={formData.type} required onChange={(e) => setformData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
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
                    variant="outlined"
                    type="number"
                    label="Amount"
                    fullWidth
                    className={styles.forminput}
                    value={formData.amount} 
                    onChange={(e) => setformData({...formData, amount: e.target.value})}
                    required                   
                    />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                variant="outlined" 
                type="date" 
                label="Date" 
                fullWidth 
                value={formData.date} 
                onChange={(e) => setformData({...formData, dateString: formatDate(e.target.value)})}
                required
                />
            </Grid>
            <Grid item xs={12} align='center'>
                <Button endIcon={<KeyboardArrowDownIcon />} type='submit' className={styles.button} color="primary" variant="contained" size="medium">Add Transaction</Button>
            </Grid>
        </Grid>
    </form>
  )
}

export default Form