import React, {useState} from 'react';
import './Main.css';
import axios from 'axios';


const Main = () => {
    const [counter, setCounter] = useState(1)
    
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
    }

    return(
        <div className="mainContainer">
            <div className="mainCol">
                <div className="saveC">
                    <p>Saving counter value</p>
                </div>
                <div className="counterClass" >
                    <div className="counerElemin" onClick={handleClick2}>
                        <h className="minus">-</h>
                    </div>
                    <div className="counerElenum">
                        <p>{counter}</p>
                    </div>
                    <div className="counerEleplus" onClick={handleClick1}>
                        <h className="plus">+</h>
                    </div>
                </div>
                <div className="counterVal">
                    <p>Counter values  : {counter}</p>
                </div>
            </div>
        </div>
    );
}

export default Main;