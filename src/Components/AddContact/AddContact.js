import React, { Component } from 'react';
import {Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './AddContact.css'
import seed from '../../seed'

class AddContact extends Component{
	state={
		contact:{
		name:"",
		phone:""
	}
	}
render(){
return(
<div>
<br/>
<br/>
<Link to='/'><span className="link">BACK</span></Link>
<br/>
<br/>
<form className="form">
	<label>Name:</label><br/>
	<input type='text' value={this.state.contact.name} onChange={(event)=>{
		const name=event.target.value;
		this.setState({
			contact:{name:name,phone:this.state.contact.phone}
		})
	}}/><br/><br/>
	<label>Phone:</label><br/>
	<input type='text'  value={this.state.contact.phone} onChange={(event)=>{
		const phone=event.target.value;
		this.setState({
			contact:{name:this.state.contact.name,phone:phone}
		})
	}}/><br/><br/>
	<Button variant="primary" className="addButton1" onClick={()=>{
		seed.contacts.push(this.state.contact);
		const contact={name:"",phone:""};
		this.setState({contact:contact})
	}}><span className="buttonHead" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span></Button>
</form>
<br/><br/>
<div className="twoWayBindingContent">
<h3>Subscribers to be added</h3>
Name:&nbsp;{this.state.contact.name}<br/><br/>
Phone:&nbsp;{this.state.contact.phone}
</div>
</div>
);
}
}
export default AddContact;