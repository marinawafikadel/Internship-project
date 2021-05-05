import React, { Component } from 'react'
import{BrowserRouter as Router,Link,Route} from 'react-router-dom'
import border from './border';
 class Header extends Component {
    
  render() {
    const headerStyle={
      color: "#008000",
      width: "138px",
      height: "6.828703703703703%",
      fontFamily:"Microsoft Yi Baiti",
      fontSize:"20px",
      fontWeight:"200",
      letterSpacing:"2px",
      position: "absolute",
      top:"-15px",
      left:"0%",
    }
   
      return (
      <div >
        <h1 style={headerStyle}>Property Maintenance</h1>
      </div>
    )
  }
}

export default Header

