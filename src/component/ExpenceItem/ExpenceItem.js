import './ExpenceItem.css'
import ExpenceDate from "../ExpenceDate/ExpenceDate";

function ExpenceItem(props) {
    return (
        <div className="expense-item">
            <ExpenceDate date={props.obj.date}/>
            <div className="expense-item__description">
                <h2>{props.obj.title}</h2>
                <div className="expense-item__price">$ {props.obj.amount}</div>
            </div>
        </div>
    );
};

export default ExpenceItem;