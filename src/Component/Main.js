import React, {Component} from 'react';
import './Main.css';

class Main extends Component {

    render(){
        return(
            <div className="mainContainer">
                <div className="mainCol">
                    <div className="saveC">
                        <p>Saving counter value</p>
                    </div>
                    <div className="counterClass">
                        <div className="counerElemin">
                            <h className="minus">-</h>
                        </div>
                        <div className="counerElenum">
                            <p>10</p>
                        </div>
                        <div className="counerEleplus" >
                            <h className="plus">+</h>
                        </div>
                    </div>
                    <div className="counterVal">
                        <p>Counter values : 10</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;