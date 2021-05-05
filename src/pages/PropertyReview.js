import React, { Component } from 'react';
import Coloredline from '../components/Coloredline'
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {FileUpload} from 'primereact/fileupload';
import logo from '../components/download.png';
import logo2 from '../components/download2.jpeg';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Table from 'react-bootstrap/Table'


import axios from 'axios'




class PropertyReview extends Component{
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          startDate1: new Date(),
          startDate2: new Date(),
          startDate3: new Date(),
          startDate4: new Date(),
          startDate5: new Date(),
          startDate6: new Date()
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
      <div className="PropetyView" style={{position:"relative",top:"27px",marginLeft:'100px',marginRight:'100px',paddingLeft:'50px',paddingRight:'50px',  border: '15px solid',color : "#3CB371", borderRadius:(80,80,80,80)}} >
      <div style={{position:"relative",width:"100%"}}>
      <style>{'body { background-color:#ffffff,display: "flex"'}</style>
      <div style={{ width: '100%' ,margin:'0',textAlign:"right",position:'relative',top:'10px'}} >
      <img className="download2" src={logo2} display="block"  alignSelf='center' width= "18%" height='5%' alt="this is  here :("/>
     </div>
     <h1 style={{ color : "#000000",textAlign: "left"}}>Property Review</h1>
     <br/>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Project  Review Details<Coloredline title={"Project Details"} /></h2>
      
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
  <tbody>
    <tr>
      <td>Project Code </td>
      <td>  <InputText type="text"  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} /> </td>
      <td>{" "} {" "}    </td>
      <td>Project Name </td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} /></td>
   </tr><tr> 
      <td>Visit Date</td>
      <td> <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /></td>
    </tr>
  </tbody>
</Table>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Indoor (100%)</h2><Coloredline title={"Construction Details"} />
     <br/>
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover >
  
  <tbody>
    <tr>
      <td>Ceiling (20%)</td>
      <td><InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} />  </td>
      <td>    </td>
      <td>Cladding (25%)</td>
      <td> <InputText type="text"  value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value})} /> </td>
    </tr>
    <tr>
      <td>Walls (20%)t</td>
      <td>  <InputText type="text"  value={this.state.value5} onChange={(e) => this.setState({value5: e.target.value})} />  </td>
      <td>          </td>
      <td>Glass (25%)</td>
      <td>  <InputText type="text"  value={this.state.value6} onChange={(e) => this.setState({value6: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Flooring (20%)</td>
      <td> <InputText type="text"  value={this.state.value7} onChange={(e) => this.setState({value7: e.target.value})} /> </td>
      <td>          </td>
      <td> Signage (25%) </td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Furniture (20%)</td>
      <td> <InputText type="text"  value={this.state.value9} onChange={(e) => this.setState({value9: e.target.value})} /> </td>
      <td>          </td>
      <td> Landscape (25%) </td>
      <td>  <InputText type="text"  value={this.state.value10} onChange={(e) => this.setState({value10: e.target.value})} /></td>
    </tr>
    <tr>
      <td>Wet Area (10%)</td>
      <td> <InputText type="text"  value={this.state.value11} onChange={(e) => this.setState({value11: e.target.value})} /> </td>
      <td>          </td>
      <td> Service area (10%) </td>
      <td>  <InputText type="text"  value={this.state.value12} onChange={(e) => this.setState({value12: e.target.value})} /></td>
    </tr>
  </tbody>
</Table>
     
       <h2 style={{ color : "#3CB371",textAlign: "left"}}>Review Score %</h2><Coloredline title={"Comments"} />
       <br></br>
       <p style={{ color : "#000000",textAlign: "left"}}>Total Score %</p><InputText type="text"  value={this.state.value13} onChange={(e) => this.setState({value13: e.target.value})} />
       <button style = {ButtonStyle2}   > Calculate </button> 
       {" "} <button style = {ButtonStyle}   > save </button> 
       {" "} <button style = {ButtonStyle}  > cancel</button> 
    
        </div>
       </div>
      
 
    )
  
 }

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
    left:'600px'
} 
const ButtonStyle2 = {
  backgroundColor:'#ffffff',
    color :'#242424',
    textAlign:'centre',
    padding:'10px 20px',
    borderRadius:'12px',
    float :'center',
    fontSize:'18px',
    position:'relative',
    left:'28px'
} 
 export default PropertyReview;
 