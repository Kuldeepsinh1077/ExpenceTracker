import './App.css';
// eslint-disable-next-line no-unused-vars
import Expenses from "./component/Expenses/Expenses";
import React, { useState } from 'react';
import {expenseData} from './data'
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState(expenseData)
    const saveExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [ expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onSaveExpense={saveExpenseHandler}/>
            <Expenses expenses={expenses} />
        </div>
    );
}
export default App;