import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainheader from './CoreComponents/Header/Mainheader';
import Slideshow from './Components/ImageSlider/imageSlider';
class App extends Component {
  render() {
    return (
   <div><Mainheader/>
   <Slideshow/>
   </div>
    );
  }
}

export default App;
