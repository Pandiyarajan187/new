import React, { useState } from 'react'

function Registarion() {
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
        <input
          type="text"
          placeholder="Enter your First name"
          name="name"
          value={text}
          required={(e) => e.charAt(0).toUpperCase() + e.slice(1)}
          onChange={(e) => setText(e.target.value)}
        />
        <br></br>
        Enter Your Mobile Number :
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          name="number"
          maxLength={10}
          value={number}
          onChange={handleNumber}
        
        /><br/><br/>
        Enter Your Age :
        <input
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
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>      
         Enter Your pwd :
        <input
          type="password"
          placeholder="Enter your pwd"
          name="pwd"
          value={Pwd}
          onChange={(e) => setPwd(e.target.value)}
        /><br></br>
               Enter Your cpwd :
        <input
          type="password"
          placeholder="Enter your cpwd"
          name="cpwd"
          value={Cpwd}
          onChange={(e) => setCpwd(e.target.value)}
        /><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Registarion
