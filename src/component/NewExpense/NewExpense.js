import './NewExpense.css'
import React from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm"
function NewExpense(props) {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };

        props.onSaveExpense(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    );
};

export default NewExpense;