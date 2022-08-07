import React, {useContext} from 'react'
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Button} from '@mui/material'
import MoneyOff from '@mui/icons-material/MoneyOff';
import Delete from '@mui/icons-material/Delete';
import PaidIcon from '@mui/icons-material/Paid';

import {numberWithCommas} from '../utils/formatNumber'
import {GlobalContext} from '../context/GlobalState'

import styles from '../css/TransactionList.module.css'

const TransactionList = () => {
  const {deleteTransaction, transactions, deleteAllData} = useContext(GlobalContext);

  return (
    <div className={styles.list_wrapper}>
    {transactions.length > 1 && (<Button className={styles.clear_all_btn} onClick={() => deleteAllData()}>Clear all</Button>)}
    {transactions.length === 0 ? <p className={styles.add_transactions_message}>Please use the fields above to add your transactions</p> : (    
    <List dense={false} className={styles.list}>
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem className={transaction.type === 'Income' ? `${styles.transaction_item} ${styles.income}` : `${styles.transaction_item} ${styles.expense}`}>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? styles.avatarIncome : styles.avatarExpense}>
                            {transaction.type === 'Income' ? <PaidIcon/> : <MoneyOff/>}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`${numberWithCommas(transaction.amount)} € - ${transaction.dateString}`}/>
                    <ListItemSecondaryAction>
                        <IconButton className={styles.delete_btn} edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                            <Delete />
                        </IconButton>    
                    </ListItemSecondaryAction> 
                </ListItem>
            </Slide>
        ))}
    </List>
    )}
    </div>
  )
}

export default TransactionList