'use strict';

import React from 'react';
import SearchInput, {createFilter} from 'react-search-input'
// var Msg = require('../../models/data.js');
// var Msgs = require('mongoose').model('Msg');

var person = JSON.parse(localStorage.getItem('personItem')) || [];
const Myform = React.createClass({
    render:function(){
        return(
            <div className="home">
                <p className="heading">Please fill the form </p>
                <form id="myForm" onSubmit={this.props.readvalue}>
                    <div className="form-para">
                        <label htmlFor ="firstname" className="label-para">First Name</label>
                        <input onChange={this.props.handleNameChange} type="text" name="fname" id="firstname" pattern="[A-Za-z]{1,32}" required/>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="lastname" className="label-para">Last Name</label>
                        <input type="text" name="lname" id="lastname" pattern="[A-Za-z]{1,32}" required />
                    </div>

                    <div className="form-para">
                        <label htmlFor ="age" className="label-para">Age</label>
                        <input type ="number" id="age" name="age" min="1" max="99" pattern="\d+" required/>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="dob" className="label-para">Date of birth</label>
                        <input type ="date" id="dob" onClick={this.props.dateofbirth} required />
                    </div>

                    <div className="form-para">
                        <label htmlFor ="gender" className="label-para">Gender</label>
                        <input type="text" id="gender" name="gender" list="l1" required
                            pattern="[Mm]ale|[Ff]emale" />
                        <datalist id="l1">
                            <option>Male</option>
                            <option>Female</option>    
                        </datalist>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="phone" className="label-para">Phone</label>
                        <input type="text" id="phone" name="phone" pattern="[789][0-9]{9}" required/>
                    </div>

                    <div className="form-textarea">
                        <label htmlFor ="text" className="label-para">message</label>
                        <textarea type="text" rows="4" placeholder="write your message"></textarea>
                    </div>
                    
                    <button className="button" type="submit">submit</button>
                </form>
            </div>
        );
    }
});

const Sidebar = React.createClass({
    render:function(){
    // console.log(this.props.person);
        var namelist = '';
        this.props.person.forEach(function(val) {
            namelist += '<div className="sidebarname"><label style="color: white" className="sidelab ' + val + '">' + val + '</label></div>';
        });
        return(
            <div className="sidebar">
                <input id="search-criteria" className="search" type="text" name="search" placeholder="search..." onChange={this.props.searchKey} />
                
                <div dangerouslySetInnerHTML={{ __html: namelist }}>
                
                </div>
            </div>
        );
    }
});

const Home= React.createClass({
    getInitialState: function() {
        return {
            globalperson: person,
            findperson: person,
            fname: 'your name'
        }
    },
    dateofbirth:function(){
            $("#datepicker").datepicker();
    },
    handleNameChange: function(e) {
       this.setState({fname: e.target.value});
    },
    readvalue:function(event){
        person.push(this.state.fname);
        localStorage.setItem('personItem',JSON.stringify(person));
        event.preventDefault();
        this.setState({
         globalperson: person,
         findperson: person
        });
    },
    searchKey: function() {
        this.handleKeyPress();
    },
    handleKeyPress:function(){
        var g = $('#search-criteria').val().toLowerCase();
        var newperson = [];
        person.forEach(function(val) {
            var s = val.toLowerCase();
            var result = s.indexOf(g);
            if(result == 0) {
                newperson.push(val);
            } else {
                console.log('not match');
            }
        });
        this.setState({
            findperson: newperson
        });
    },
    render:function(){
        return(
            <div className="container">
                <Sidebar person={this.state.findperson} searchKey={this.searchKey} />
                <Myform readvalue={this.readvalue} dateofbirth={this.dateofbirth} handleNameChange={this.handleNameChange}/>
            </div>
        );
    }
});



export default Home;