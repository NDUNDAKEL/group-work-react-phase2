import React from "react";

const Header = () => {
    return (
        <main>
     <div id='main'>
          <div id='aside'>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
              <p className='connect'>Facebook helps you connect and <br />share with the people in your life.</p>
          </div>
         <div>
         <div id='form'>
                <input type="text" placeholder='Email address or Phone number'/>
                <input type="text" placeholder='Password'/>
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