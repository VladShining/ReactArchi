import React from 'react';

const Signin:React.FC<any> = (props) => {
    const {email,setEmail,password,setPassword,handleSignin,handleSignUp,hasAccount,setHasAccount,emailError,passwordError

    } = props;
    return(
        <section className="login">
            works login
            <div className="loginContainer">
                <label htmlFor="">name</label>
                <input type="text"
                 autoFocus
                  required 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}/>
                  <p className="errormsg"> {emailError}</p>
                  <input type="password"
                
                  required 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}/>

                  <div>
                      
                          
                            <button onClick={handleSignin}>Signin</button>
                          
                  

    
                  </div>
            </div>
        </section>
    )
}
export default Signin;