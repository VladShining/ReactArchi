import React from 'react';

const Signin:React.FC<any> = (props) => {
    const {email,setEmail,password,setPassword,handleSignin,hasAccount,setHasAccount,emailError,passwordError

    } = props;
    return(
            <div className="SignupContainer">
                <input type="text"
                  autoFocus
                  required 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <p> {emailError}</p>
                <input type="password"
                  required 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <p> {passwordError}</p>
                <button onClick={handleSignin}>Signin</button>
            </div>
    )
}
export default Signin;