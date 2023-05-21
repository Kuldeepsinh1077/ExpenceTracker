import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card"
import React from "react";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.obj.date}/>
            <div className="expense-item__description">
                <h2>{props.obj.title}</h2>
                <div className="expense-item__price">$ {props.obj.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;