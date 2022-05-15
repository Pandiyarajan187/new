import React, { useState } from 'react'
import { capitalize, TextField } from "@material-ui/core";
import { Button } from '@material-ui/core';

function Registarion() {
  const [error, seterror] = useState('')
  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
  const [Age, setAge] = useState('')
  const [Gender, setGender] = useState('')
  
  const [Email, setEmail] = useState('')
  
  const [Pwd, setPwd] = useState('')
  const [Cpwd, setCpwd] = useState('')

    const handleNumber = (e) => {
        setNumber(e.target.value);
        if (e.target.value.length > 10) {
         
        }
    }

  return (
    <div>
      <form>
        Enter Your First Name :
        <TextField
          type="text"
          placeholder="Enter your First name"
          name="name"
          value={text}
          required={(e) => e.charAt(0).toUpperCase() + e.slice(1)}
          onChange={(e) => setText(e.target.value)}
          //  ********************************************************************************//
          error={text}
          helperText={text !== text.charAt(0).toUpperCase() + text.slice(1) ?  "Enter First Letter As Capital " : "" }
          //  ********************************************************************************//
        />

        <br></br>
        Enter Your Mobile Number :
        <TextField
          type="number"
          placeholder="Enter your Mobile Number"
          name="number"
          maxLength={10}
          value={number}
          onChange={handleNumber}
            //  ********************************************************************************//
          error={number}
          helperText={ number.length != 10 ? "Enter Valid Number!" : " "}
            //  ********************************************************************************//
        
        /><br/><br/>
        Enter Your Age :
        <TextField

          type="number"
          placeholder="Enter your Age"
          name="age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        /><br></br>
        Select your Gender:
        <label>
        
         <input

          type="radio"
          name="Gender"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        />
        </label> 
        Male
        <label>
        <input
          type="radio"
          name="Gender"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        />
        </label>
        Female <br></br>
        Enter Your Email :
        <TextField
          type="email"
          placeholder="Enter your email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>      
         Enter Your pwd :
        <TextField
          type="password"
          placeholder="Enter your pwd"
          name="pwd"
          value={Pwd}
          onChange={(e) => setPwd(e.target.value)}
        /><br></br>
               Enter Your cpwd :
        <TextField
          type="password"
          placeholder="Enter your cpwd"
          name="cpwd"
          value={Cpwd}
          onChange={(e) => setCpwd(e.target.value)}
        /><br></br>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Registarion
