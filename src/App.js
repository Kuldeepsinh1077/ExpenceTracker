import './App.css';
import Expenses from "./component/Expenses/Expenses";
import React from 'react';
import {expences} from './data'
import NewExpense from "./component/NewExpense/NewExpense";

function App() {

    const saveExpenseHandler = (expense) => {
        console.log("Hello from App.js .....")
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onSaveExpense={saveExpenseHandler}/>
            <Expenses obj={expences} />
        </div>
    );
}
export default App;