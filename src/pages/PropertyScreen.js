import React, { Component } from 'react';
import Coloredline from '../components/Coloredline'
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {FileUpload} from 'primereact/fileupload';
import {Paginator} from 'primereact/paginator';
import logo2 from '../components/download2.jpeg';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Table from 'react-bootstrap/Table'
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';




class PropertyScreen extends Component{


    constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      startDate1: new Date(),
      startDate2: new Date(),
      startDate3: new Date(),
      startDate4: new Date(),
      startDate5: new Date(),
      startDate6: new Date(),

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    

  }
  
  handleChange(date) {
    this.setState({
      startDate:date,
     
    });
  }
  handleChange1(date) {
    this.setState({
      
      startDate1:date,
    
    });
  } 
  handleChange2(date) {
    this.setState({
      
      startDate2:date,
    
    });
  } 
  handleChange3(date) {
    this.setState({
      
      startDate3:date,
    
    });
  } 
  handleChange4(date) {
    this.setState({
      
      startDate4:date,
    
    });
  } 
  handleChange5(date) {
    this.setState({
      
      startDate5:date,
    
    });
  } 
  handleChange6(date) {
    this.setState({
      
      startDate6:date,
    
    });
  } 
    onBasicUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
  

 render(){
    

    return (
        <div className="Propety" style={{position:"relative",top:"27px",marginLeft:'100px',marginRight:'100px',height:'700px',paddingLeft:'50px',paddingRight:'50px',  border: '15px solid',color : "#3CB371", borderRadius:(80,80,80,80)}} >
      <div style={{position:"relative",width:"100%"}}>
      <style>{'body { background-color:#ffffff,display: "flex"'}</style>
      <div style={{ width: '100%' ,margin:'0',textAlign:"right",position:'relative',top:'10px'}} >
      <img className="download2" src={logo2} display="block"  alignSelf='center' width= "18%" height='5%' alt="this is  here :("/>
     </div>
     <br/>
     <h1 style={{ color :"#3CB371",textAlign: "left"}}>Property<Coloredline title={"Project Details"} /></h1>
      
     <Table style={{ width: '100%', height:'450px',color : "#000000",fontSize:"25px"}} striped bordered hover>
  <tbody>
    <tr>
      <td>Property Id</td>
      <td>  <InputText type="text"  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} /> </td>
      <td>{" "} {" "}    </td>
      <td>Property Name</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Property type</td>
      <td> <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
      <td>          </td>
      <td>Property Status</td>
      <td>  <InputText type="text"  value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Property Start Date</td>
      <td> <DatePicker
        selected={this.state.startDate1}
        onChange={this.handleChange1}
      /> </td>
      <td>          </td>
      <td> Last Update Date</td>
      <td>   <DatePicker
        selected={this.state.startDate2}
        onChange={this.handleChange2}
      /> </td>
    </tr>
    <tr>
      <td>Property End date</td>
      <td>  <DatePicker
        selected={this.state.startDate3}
        onChange={this.handleChange3}
      /> </td>
      <td>          </td>
    </tr>
  </tbody>
</Table>
   
        
     
       {" "} <button style = {ButtonStyle}   > save </button> 
       {" "} <button style = {ButtonStyle}  > cancel</button> 
    
        </div>
       </div>
      
       
 
    )
    
    
 }


}
const Button2Style = {
  backgroundColor:'#ffffff',
    color :'#242424',
    textAlign:'centre',
    padding:'10px 20px',
    borderRadius:'12px',
    float :'center',
    fontSize:'18px',
    position:'relative',
    left:'9px',
    width: '120px'
} 

const ButtonStyle = {
    backgroundColor:'#ffffff',
      color :'#242424',
      textAlign:'centre',
      padding:'15px 32px',
      borderRadius:'12px',
      float :'center',
      fontSize:'18px',
      position:'relative',
      left:'790px',
      width: '130px'

  } 
 export default PropertyScreen;
 