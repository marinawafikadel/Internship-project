import React, { Component } from 'react'
import{BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Data from '../components/Data'

 class footer extends Component {
    
  render() {
   

    
      return (
      <div >
     <Coloredline />
        <Data keyy={'Maker'} value={}  /><br/>
     <Data keyy={'Checker'} value={}  /><br/>
     <Data keyy={'Mod No'} value={}  /><br/>
     <Data keyy={'Date Time'} value={}  /><br/>
     <Data keyy={'Record Status'} value={ }/><br/>
     <Data keyy={'Authorization status'} value={}/><br/>
    
      </div>
    )
  }
}

export default footer

