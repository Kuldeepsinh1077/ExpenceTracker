import ExpenceItem from "../ExpenceItem/ExpenceItem";
import './Expences.css'
function Expences(props) {
    return (
        <div className="expenses">
            <ExpenceItem obj={props.obj[0]}/>
            <ExpenceItem obj={props.obj[1]}/>
            <ExpenceItem obj={props.obj[2]}/>
            <ExpenceItem obj={props.obj[3]}/>
        </div>
    );
};

export default Expences;