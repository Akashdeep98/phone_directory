import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom";
import seed from '../../seed'

class Home extends Component {
  state={
    contacts:seed.contacts,
  }

  render() {
    return (
      <div className="App">
          <Link to='/add'><Button variant="primary" className="addButton"><span className="buttonHead"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span></Button></Link>

        <br/>

        <table className="table">
        <tbody>
          <tr>
            <th>NAME</th>
            <th className="tableContent">PHONE</th>
            <th className="tableContent"></th>
          </tr>
          {seed.contacts.map((contact,index)=>{
            return(
            <tr>
            <td>{contact.name}</td>
            <td className="tableContent">{contact.phone}</td>
            <td className="tableContent"><Button variant="primary" className="deleteButton" onClick={(index)=>{
              const contacts=seed.contacts;
              contacts.splice(index,1)
              this.setState({contacts:contacts})
            }}><span className="buttonHead"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DELETE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span></Button></td>
          </tr>);
          })}
        </tbody>
        </table>
        
      </div>
    );
  }
}

export default Home;
