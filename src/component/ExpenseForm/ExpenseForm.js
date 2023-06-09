import './ExpenseForm.css'
import React, {useState} from "react";
function ExpenseForm(props) {

    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [entereddate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle : event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredtitle,
            amount : +enteredamount,
            date : new Date(entereddate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.cancelEditFormHandler();
    };
    const cancelHandler = () => {
        props.cancelEditFormHandler();
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={entereddate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;