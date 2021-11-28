import React, {Component} from 'react';
import './Main.css';
import axios from 'axios';
import Loader from './Loader/Loader';


class Main extends Component {

    constructor() {
        super();
        this.state = {
           counter: 1,
           loading:false
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
        var x=Number(this.state.counter);
        this.setState({counter: x +1});
      //  if(this)
        this.setState({loading:true});
        axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', { mohnish: this.state.counter })
        .then((response) => {
        console.log(response);
        this.setState({loading:false});
        })
    }
    handleClick2 = () => {
        var x=Number(this.state.counter);
        this.setState({counter: x-1});
        this.setState({loading:true});
        axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', { mohnish: this.state.counter })
        .then((response) => {
        console.log(response);
        this.setState({loading:false});
        })
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    

    render(){
        return(
            <div className="mainContainer">
                <div className="mainCol">
                    <div className="saveC">
                        <div className="loadC">
                            {this.state.loading? <Loader/> :null}
                        </div>
                        {/* <Loader/> */}
                        &nbsp;&nbsp;
                        <p>Saving counter value</p>
                    </div>
                    <div className="counterClass" >
                        <div className="counerElemin" onClick={this.handleClick2}>
                            <h className="minus">-</h>
                        </div>
                        <div className="counerElenum">
                        <input
                            type="text"
                            name="counter"
                            value={this.state.counter}
                            onChange={this.onChange}
                            className="inputC"
                            style={{fontWeight:"bold", color:"#b24242"}}
                            />
                            {/* <p>{this.state.counter}</p> */}
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


export default Main;