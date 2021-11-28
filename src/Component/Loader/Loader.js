import React, {Component} from 'react';
import './Loader.css';

class Loader extends Component {
    render(){
        return(
            <div>
                {/* <div class="lds-roller"><div></div>
                <div></div>
                <div></div>
                <div></div><div></div>
                <div></div><div></div>
                <div></div></div> */}
                <div class="spinner-4"></div>
            </div>
        );
    }
}

export default Loader;
