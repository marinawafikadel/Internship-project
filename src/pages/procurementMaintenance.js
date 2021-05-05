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
        <div className="Propety" style={{position:"relative",top:"27px",marginLeft:'100px',marginRight:'100px',paddingLeft:'50px',paddingRight:'50px',  border: '15px solid',color : "#3CB371", borderRadius:(80,80,80,80)}} >
      <div style={{position:"relative",width:"100%"}}>
      <style>{'body { background-color:#ffffff,display: "flex"'}</style>
      <div style={{ width: '100%' ,margin:'0',textAlign:"right",position:'relative',top:'10px'}} >
      <img className="download2" src={logo2} display="block"  alignSelf='center' width= "18%" height='5%' alt="this is  here :("/>
     </div>
     <h1 style={{ color : "#000000",textAlign: "left"}}>Procurement Maintenance</h1>
     <br/>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Project Details<Coloredline title={"Project Details"} /></h2>
      
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
  <tbody>
    <tr>
      <td>Project Code</td>
      <td>  <InputText type="text"  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} /> </td>
      <td>{" "} {" "}    </td>
      <td>Title</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} /></td>
    </tr>
    </tbody>
    </Table>
    <h2 style={{ color : "#3CB371",textAlign: "left"}}>Property Details<Coloredline title={"Project Details"} /></h2>
    <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
    <tbody>
    <tr>
      <td>Property Code</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})}
      />  </td>
      <td>Contract Code</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})}
      />  </td>
       </tr>
       <tr>
      <td>Property Name</td>
      <td>  <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
      <td>Property Status</td>
      <td>  <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
    </tr>
    </tbody>
</Table>
<h2 style={{ color : "#3CB371",textAlign: "left"}}>Geographical Data<Coloredline title={"Project Details"} /></h2>
<Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover>
    <tbody>
    <tr>
      <td>Area SQM</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})}
      />  </td>
      <td>Address</td>
      <td>  <InputText type="text"  value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})}
      />  </td>
       </tr>
       <tr>
      <td>Region</td>
      <td>  <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
    </tr>
    
    </tbody>
</Table>
     
     <h2 style={{ color : "#3CB371",textAlign: "left"}}>Contractual Data</h2><Coloredline title={"Construction Details"} />
     <br/>
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover >
  
  <tbody>
    <tr>
      <td>Contract Type</td>
      <td> <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
    
      <td>Initial Contract Start Date</td>
      <td> <DatePicker
        selected={this.state.startDate3}
        onChange={this.handleChange3}
      /> </td>
      </tr>
      <tr>
      <td>Contract Duration</td>
      <td> <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
      <td>Contract</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
    </tr>
    <tr>
      <td>Remaining Duration From Contact</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
    </tr>
  </tbody>
</Table>

<h2 style={{ color : "#3CB371",textAlign: "left"}}>Contract Data</h2><Coloredline title={"Construction Details"} />
     <br/>
     <Table style={{ width: '100%', color : "#000000",fontSize:"20px"}} striped bordered hover >
  
  <tbody>
    <tr>
      <td>Owner Name</td>
      <td> <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
    
      <td>Contact  Mobile</td>
      <td>< InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /> </td>
      </tr>
      <tr>
      <td>Owner Email</td>
      <td> <InputText type="text"  value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} /></td>
      <td>Union Landlord Name</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
    </tr>
    <tr>
      <td>Union Landlord Mobile</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
      <td>Union Landlord Mobile</td>
      <td>  <InputText type="text"  value={this.state.value8} onChange={(e) => this.setState({value8: e.target.value})} />  </td>
    </tr>
  </tbody>
</Table>
     
       <h2 style={{ color : "#3CB371",textAlign: "left"}}>Comments</h2><Coloredline title={"Comments"} />
       <br></br>
        <textarea className="form-control" id="exampleFormControlTextarea1"  rows= "10" cols="170"></textarea>
       
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
      left:'900px'
  } 
 export default Property;
 