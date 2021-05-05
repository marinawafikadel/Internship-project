import React, { Component } from 'react';


export class  ColoredLine extends Component{
    constructor(props){
        super(props);
    }
    render (){
//const{ title}=this.props
return(
    <div>
      
    <hr
        style={{
            color: '#000000',
            backgroundColor:'#3CB371',
            width: '100%', 
            border: 0,
            height: 2,
            position: "absolute",
            left: "0%"
        }} 
    />
    </div>)
    
  }  };


export default ColoredLine ;
