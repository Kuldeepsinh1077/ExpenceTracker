import './App.css';
import Expences from "./component/Expences/Expences";
import {expences} from './data'

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expences obj={expences} />
        </div>
    );
}

export default App;
