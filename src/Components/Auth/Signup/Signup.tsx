import React from 'react';

const Signup:React.FC<any> = (props) => {
    const {email,setEmail,password,setPassword,handleSignUp,hasAccount,setHasAccount,emailError,passwordError

    } = props;
    return(
        <>
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
                <button onClick={handleSignUp}>SignUp</button>
            </div>
        </>
    )
}
export default Signup;
