import React, {Component,useState} from 'react';
import './Main.css';


const Main = () => {
    const [counter, setCounter] = useState(0)
    
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
                <div className="counterClass"  onClick={handleClick2}>
                    <div className="counerElemin">
                        <h className="minus">-</h>
                    </div>
                    <div className="counerElenum">
                        <p>10</p>
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