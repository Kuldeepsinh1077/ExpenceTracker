import './NewExpense.css'
import React, {useState} from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm"
function NewExpense(props) {

    const [cancel, setCancel] = useState(true);
    const editFormHandler = () => {
        setCancel(false);
    }
    const cancelEditFormHandler = () => {
        setCancel(true);
    }
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };

        props.onSaveExpense(expenseData);
    };

    return(
        <div className="new-expense">
            {cancel && <button onClick={editFormHandler}>Add New Expense</button>}
            {!cancel && <ExpenseForm onSaveExpenseData={saveExpenseHandler} cancelEditFormHandler={cancelEditFormHandler}/>}
        </div>
    );
};

export default NewExpense;