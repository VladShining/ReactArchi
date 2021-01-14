import firebase from 'firebase';
import React , { useState, useEffect } from "react";
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';

const Auth = () => {
   const [user,setUser] = useState('');
   const [email,setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError,setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [hasAccount,setHasAccount] = useState(false);

   const clearInputs= () => {
       setEmail('');
       setPassword('');
   }

   const clearErrors= () =>{
       setEmailError('');
       setPasswordError('');
   }
   const handleSignUp = () =>{
    clearErrors();
    //alert("signUp ok");
       firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
        
       })
       .catch((err)=>{
           switch (err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
               
           }
       });
   };

   const handleSignin = () =>{
    clearErrors();
    //alert("signIn ok");
    firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{

    })
    .catch((err)=>{
        switch (err.code){
             case "auth/invalid-email":
             case "auth/user-disabled":
             case "auth/user-not-found":
                 setEmailError(err.message);
                 break;
             case "auth/wrong-password":
                 setPasswordError(err.message);
                 break;
            
        }
    });
   };
   const handleLogout = () =>{
       firebase.auth().signOut();
       
   };
   const authListener = () => {
       firebase.auth().onAuthStateChanged(user=>{
           if(user){
               clearInputs();
               setUser(user.uid);
           }else{
               setUser("");
           }
       });
   };
   useEffect(()=>{
       authListener();
   },[]);

   return(
       <div className="Auth">
           {hasAccount ? ( 
           <Signin email={email}
                setEmail={setEmail}
                password={password} 
                setPassword={setPassword}
                handleSignin={handleSignin}
                 
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError} 
                passwordError={passwordError}
            />
           ):(<Signup email={email}
                setEmail={setEmail}
                password={password} 
                setPassword={setPassword}
                
                handleSignUp={handleSignUp} 
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError} 
                passwordError={passwordError}
            />
           )}
           <button onClick={()=>setHasAccount(!hasAccount)}>*</button>
       </div>
   );
};
export default Auth ;