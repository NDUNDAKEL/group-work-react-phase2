import React, { useEffect, useState } from "react";

const Header = () => {
    const [users,setUsers]=useState({

        name:"admin",
         password:"1234"
    })
    const [name,setName] =useState('')
    const [password,setPassword] =useState('')
    const [isPasswordVisible,setIsPasswordVisible]=useState(null)
    const [message,setMessage]=useState({
        success:'',
        error:''
    })
    useEffect(()=>{
        alert('Welcome to Facebook ')
        setName('')
        setPassword('')
    },[]) //show when page loads
const login=()=>{
      if(name !== users.name && password !== users.password){
setMessage({
    success:"",
    error:"Inavlid Credentials"
})

setName('')
setPassword('')
    }else{
        setMessage({
            success:"Successfull Login",
            error:""
        })
        setName('')
        setPassword('')
    }
}
  
    return (
        <main>
        
     <div id='main'>
          <div id='aside'>
          
          <p></p>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
   
        

          </div>
         <div>
         <div id='form'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name address'/>

                <input type={isPasswordVisible ? 'text' :'password'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        
              <input
    type="checkbox"
    checked={isPasswordVisible}
    onChange={(e) => setIsPasswordVisible(e.target.checked)}
  />
  Show Password
     

  <p style={{color:"green"}}>{message.success }</p>
  <p style={{color:'red'}}>{message.error }</p>
              <button className='login' onClick={login}>Log in</button>
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