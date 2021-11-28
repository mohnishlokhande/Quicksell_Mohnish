import React, {useState, useEffect, Component} from 'react';
import './Main.css';
import axios from 'axios';
import Loader from './Loader/Loader';


class Main extends Component {

    constructor() {
        super();
        this.state = {
           counter: 1
        }
    }
    
    componentDidMount(){
        axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json')
          .then((response) => {
            // handle success
            if(response==null || response.data == null) {
            // console.log(5);
               this.setState({counter: 1});
            }
            else {
                console.log(response.data);
                this.setState({counter: response.data});
            }
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }
    handleClick1 = () => {
        this.setState({counter: this.state.counter+1});
    }
    handleClick2 = () => {
        this.setState({counter: this.state.counter-1});
    }

    render(){
        return(
            <div className="mainContainer">
                <div className="mainCol">
                    <div className="saveC">
                        {/* <Loader/> */}
                        <p>Saving counter value</p>
                    </div>
                    <div className="counterClass" >
                        <div className="counerElemin" onClick={this.handleClick2}>
                            <h className="minus">-</h>
                        </div>
                        <div className="counerElenum">
                            <p>{this.state.counter}</p>
                        </div>
                        <div className="counerEleplus" onClick={this.handleClick1}>
                            <h className="plus">+</h>
                        </div>
                    </div>
                    <div className="counterVal">
                        <p>Counter values  : {this.state.counter}</p>
                    </div>
                </div>
            </div>
        );
    }

}

// const Main = () => {
//     const [counter, setCounter] = useState(1);
//     useEffect(() => {
//         axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json')
//           .then(function (response) {
//             // handle success
//             if(response.data == null) {
//                 setCounter(1);
//             }
//             else {
//                 console.log(response.data);
//                 setCounter(response.data);
//             }
//           })
//           .catch(function (error) {
//             console.log(error);
//           })  
//         },[]);
    
    
    // const handleClick1 = () => {
    //     setCounter(counter + 1)
    // }
    // const handleClick2 = () => {
    //     setCounter(counter - 1)
    // }

//     return(
        
//     );
// }

export default Main;