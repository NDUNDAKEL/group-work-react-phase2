import React, { useEffect, useState } from "react";

const Header = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [isPasswordVisible,setIsPasswordVisible]=useState(null)
    useEffect(()=>{
        alert('Welcome to Facebook')
    },[]) //show when page loads
    return (
        <main>
        
     <div id='main'>
          <div id='aside'>
          <p style={{fontSize:"22px",color:"blue"}}>Hello User,</p>
          <p>Your Email Address is: {email}</p>
          <p style={{
  color: isPasswordVisible ? 'green' : 'red', // Change color based on visibility
fontSize:"18px",
  fontWeight: '500',
  marginTop: '8px',
  lineHeight: '1.5',
}}>
  {`Your password is ${isPasswordVisible ? password : "not visible"}`}
</p>

          <p></p>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
              <p className='connect'>Facebook helps you connect and <br />share with the people in your life.</p>
          </div>
         <div>
         <div id='form'>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email address or Phone number'/>

                <input type={isPasswordVisible ? 'text' :'password'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        
              <input
    type="checkbox"
    checked={isPasswordVisible}
    onChange={(e) => setIsPasswordVisible(e.target.checked)}
  />
  Show Password
     


              <button className='login'>Log in</button>
                <a href="#">Forgotten Password?</a>
                <div className='below'>
                <button className='newAcc'>Create New Account</button>
                </div>
          </div>
          <p><b>Create a Page</b> for a celebrity, brand or business</p>
         </div>
      </div>
     </main>
    )
}

export default Header;