import React, {useState} from 'react';
import './Expenses.css'
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";

function Expenses(props) {

    const [year, setYear] = useState('2021');
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);
    const getYearHandler = (selectedYear) => {
        setYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={year} onGetYear={getYearHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
                {/*<ExpenseItem obj={props.expenses[0]}/>*/}
                {/*<ExpenseItem obj={props.expenses[1]}/>*/}
                {/*<ExpenseItem obj={props.expenses[2]}/>*/}
                {/*<ExpenseItem obj={props.expenses[3]}/>*/}
            </Card>
        </div>
    );
};

export default Expenses;