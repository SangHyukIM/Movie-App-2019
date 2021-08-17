import PropTypes from "prop-types"; 
import axios from "axios";
import { Component } from "react";
 // 터미널 npm i porp-types 설치 후
 // propType 호출 


class App extends Component{
  state = {
     isLoading:true,
     movies:[]
  }
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();  
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false })
    }, 5000)
  }
  render(){
    const {isLoading}= this.state;
    return <div>
    {this.state.isLoading ? "Loading":"We are ready"}
    </div>
  }
}

export default App;
