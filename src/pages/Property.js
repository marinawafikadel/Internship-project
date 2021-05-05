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




class Property extends Component{


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
      first: 0, 
            rows: 10,
            first2: 0, 
            rows2: 10,
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false,
            visibleBottom: false,
            visibleFullScreen: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageChange2 = this.onPageChange2.bind(this);


  }
  onPageChange(event) {
    this.setState({
        first: event.first,
        rows: event.rows
    });
}
onPageChange2(event) {
  this.setState({
      first2: event.first,
      rows2: event.rows
  });
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
        <div className="Propety" style={{position:"relative",top:"27px",marginLeft:'100px',marginRight:'100px',paddingLeft:'50px',paddingRight:'50px',  border: '15px solid',color : "#3CB371", borderRadius:(80,80,80,80)}} >
      <div style={{position:"relative",width:"100%"}}>
      <style>{'body { background-color:#ffffff,display: "flex"'}</style>
      <div style={{ width: '100%' ,margin:'0',textAlign:"right",position:'relative',top:'10px'}} >
      <img className="download2" src={logo2} display="block"  alignSelf='center' width= "18%" height='5%' alt="this is  here :("/>
     </div>
     <h1 style={{ color : "#000000",textAlign: "left"}}>Real Estate Management</h1>
     <br/>

     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Project Details<Coloredline title={"Project Details"} /></h2>
      
      <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
   <tbody>
     <tr>
       <td>Project Code</td>
       <td>  <InputText type="text"  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} /> </td>
       <td>{" "} {" "}    </td>
       <td>Project Name</td>
       <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} /></td>
     </tr>
   </tbody>
 </Table>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Real Estate Details<Coloredline title={"Project Details"} /></h2>
      
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
  <tbody>
    <tr>
      <td>Property Code</td>
      <td>  <InputText type="text"  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} /> </td>
      <td>{" "} {" "}    </td>
      <td>Property Name</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Last Renovation Date</td>
      <td>  <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />  </td>
      <td>          </td>
      <td>Renovation type</td>
      <td>  <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Approval Date</td>
      <td> <DatePicker
        selected={this.state.startDate1}
        onChange={this.handleChange1}
      /> </td>
      <td>          </td>
      <td> Approval Amount </td>
      <td>  <InputText type="text"  value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value})} />        </td>
    </tr>
    <tr>
      <td>Image</td>
      <td>  <InputText type="text"  value={this.state.value5} onChange={(e) => this.setState({value5: e.target.value})} /> </td>
      <td>          </td>
      <td> City </td>
      <td>  <InputText type="text"  value={this.state.value6} onChange={(e) => this.setState({value6: e.target.value})} />        </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>  <InputText type="text"  value={this.state.value7} onChange={(e) => this.setState({value7: e.target.value})} /> </td>
    </tr>
  </tbody>
</Table>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Construction Details<Coloredline title={"Construction Details"} /></h2>
     <br/>
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover >
  
  <tbody>
    <tr>
      <td>Construction End Date</td>
      <td> <DatePicker
        selected={this.state.startDate2}
        onChange={this.handleChange2}
      />  </td>
      <td>    </td>
      <td>Construction Start date</td>
      <td> <DatePicker
        selected={this.state.startDate3}
        onChange={this.handleChange3}
      /> </td>
    </tr>
    <tr>
      <td>Construction Amount</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
      <td>          </td>
      <td>Construction Date</td>
      <td>  <DatePicker
        selected={this.state.startDate4}
        onChange={this.handleChange4}
      /> </td>
    </tr>
    <tr>
      <td>Go Live Date</td>
      <td> <DatePicker
        selected={this.state.startDate5}
        onChange={this.handleChange5}
      /> </td>
      <td>          </td>
      <td> CBE Acceptance Date </td>
      <td>  <DatePicker
        selected={this.state.startDate6}
        onChange={this.handleChange6}
      /></td>
    </tr>
  </tbody>
</Table>
     
       <h2 style={{ color : "#3CB371",textAlign: "left"}}>Comments<Coloredline title={"Comments"} /></h2>
       <br></br>
        <textarea className="form-control" id="exampleFormControlTextarea1"  rows= "10" cols="170"></textarea>
        
      {" "} <button style = {Button2Style}   > previous </button> 
       {" "} <button style = {Button2Style}  > Next</button> 
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
 export default Property;
 