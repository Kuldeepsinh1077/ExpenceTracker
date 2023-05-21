import ExpenseItem from "../ExpenseItem/ExpenseItem";
import React, {useState} from 'react';
import './Expenses.css'
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {

    const [year, setYear] = useState('2023')
    const getYearHandler = (selectedYear) => {
        console.log("Hello from Expenses.js ....");
        console.log(selectedYear);
        setYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={year} onGetYear={getYearHandler}/>
                <ExpenseItem obj={props.obj[0]}/>
                <ExpenseItem obj={props.obj[1]}/>
                <ExpenseItem obj={props.obj[2]}/>
                <ExpenseItem obj={props.obj[3]}/>
            </Card>
        </div>
    );
};

export default Expenses;