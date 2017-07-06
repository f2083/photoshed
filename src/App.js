import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Search from './Search';
const cloudUrl = 'https://451224176951944:WbAVaGhUuXRYsbZn-j1e7_BeROg@api.cloudinary.com/v1_1/f2083/resources/';
const imgUrl = 'https://api.cloudinary.com/v1_1/f2083/resources/image';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	imgArr :[
			{
				public_id: '20160507_185408_ek207h',
				format: 'jpg'		
			},
			{				
				public_id:"20160508_132500_yvicll",
				format:"jpg" 
			}   	
    	]
    };
  }
  render() {
	var imgList = this.state.imgArr.map(function (item) {
		return <Image public_id={item.public_id} format={item.format} css={{
        height:'300px',width:'auto'}}/>;
   }) 	
  	
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search/>
        {imgList}
      </div>
    );
  }
}

export default App;
