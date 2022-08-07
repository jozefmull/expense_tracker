import {v4 as uuidv4} from 'uuid'

const dummyData = [
    {id: uuidv4(), amount:2250, type:'Income', category:'Business', date: new Date()},
    {id: uuidv4(), amount:1250, type:'Expense', category:'Bills', date: new Date()},
    {id: uuidv4(), amount:1350, type:'Income', category:'Investments', date: new Date()},
    {id: uuidv4(), amount:1225, type:'Expense', category:'Car', date: new Date()},
    {id: uuidv4(), amount:1150, type:'Income', category:'Extra income', date: new Date()},
    {id: uuidv4(), amount:1275, type:'Expense', category:'Clothes', date: new Date()},
    {id: uuidv4(), amount:1275, type:'Income', category:'Deposits', date: new Date()},
    {id: uuidv4(), amount:1350, type:'Expense', category:'Food', date: new Date()},
    {id: uuidv4(), amount:1375, type:'Income', category:'Lottery', date: new Date()},
    {id: uuidv4(), amount:1325, type:'Expense', category:'Shopping', date: new Date()},
    {id: uuidv4(), amount:1175, type:'Income', category:'Gifts', date: new Date()},
    {id: uuidv4(), amount:1375, type:'Expense', category:'House', date: new Date()},
    {id: uuidv4(), amount:2125, type:'Income', category:'Salary', date: new Date()},
    {id: uuidv4(), amount:1125, type:'Expense', category:'Entertainment', date: new Date()},
    {id: uuidv4(), amount:1225, type:'Income', category:'Savings', date: new Date()},
    {id: uuidv4(), amount:1150, type:'Expense', category:'Phone', date: new Date()},
    {id: uuidv4(), amount:1325, type:'Income', category:'Rental income', date: new Date()},
    {id: uuidv4(), amount:1175, type:'Expense', category:'Pets', date: new Date()},
    {id: uuidv4(), amount:1400, type:'Expense', category:'Other', date: new Date()},
]

export default dummyData