import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Property from './pages/Property'
import PropertyReview from './pages/PropertyReview'
import FacilityManagementMaintenance from './pages/FacilityManagementMaintenance'
import  Procurement from './pages/procurementMaintenance'
import PropertyScreen from './pages/PropertyScreen'
import TaskScreen from './pages/TaskScreen'
function App(){
 
   return (
      <Router>
     <div  >
        
      
      </div>
      <Route exact path="/Property" component={Property}/>
      <Route exact path="/PropertyReview" component={PropertyReview}/>
      <Route exact path="/FacilityManagement" component={ FacilityManagementMaintenance}/>
      <Route exact path="/ProcurementMaintenance" component={ Procurement}/>
      <Route exact path="/PropertyScreen" component={PropertyScreen}/>
      <Route exact path="/TaskScreen" component={TaskScreen}/>
      </Router>
   )
 
}
export default App;

 