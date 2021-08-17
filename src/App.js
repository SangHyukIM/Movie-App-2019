 import PropTypes from "prop-types"; 
import { Component } from "react";
 // 터미널 npm i porp-types 설치 후
 // propType 호출 


class App extends Component{
  state = {
    count: 0
  }
  add = () =>{
    this.setState(current => ({count: current.count + 1 }));
  };
  minus = () =>{
    this.setState(current => ({count: current.count - 1 }));
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){ 
    console.log("I just Update")
  }
  componentWillUnmount(){
    console.log("Goodbye, Cruel World")
  }
  render(){
    console.log("I'm rendered")
    return <div>
      <h1>
      The number is: {this.state.count}
      </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
