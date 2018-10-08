import React,{Component} from 'react';
import RoboArray from '../components/roboArray.js';
import SearchBox from '../components/searchbox.js';
import './app.css';
import Scroll from '../components/scroll.js';
import 'tachyons';
import { connect } from 'react-redux';
import { setSearchField } from '../action.js'


class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchField:""
    }
  };

  componentDidMount(){
    console.log(this.props.store);
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}));

  }

  OnSearchChange = (event)=>{
    this.setState({searchField:event.target.value})   //use this instead of this   this.state.searchField=event.target.value
  };



  render(){

            const {robots,searchField}=this.state;
            const filterdRobo=robots.filter(robots=>{
              return robots.name.toLowerCase().includes(searchField.toLowerCase())
              })

              if (!robots.length){
                return <h2 className="tc light-gray pa5">LOADING..</h2>
              }
              else {
                return(
                  <div className='tc'>
                    <h1 className="f2 gold">RoboFriends</h1>
                    <SearchBox search={this.OnSearchChange}/>
                    <Scroll>
                      <RoboArray robots={filterdRobo}/>
                    </Scroll>
                  </div>
                );

              }

          }
}

export default App;
