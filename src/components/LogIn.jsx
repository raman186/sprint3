import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const navigate =useNavigate();
    const handleLogin=()=>{
        const payload={email,password};
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{"Content-Type":"application/json"}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.token==="QpwL5tke4Pnpja7X4")
                navigate("/")
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }


  return (<div>
    <label>
        Email :
        <input 
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

        ></input>
    </label>
    <br />
    <label>
        Password :
        <input 
            type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

        ></input>
    </label>
    <button onClick={handleLogin}> LogIn</button>
  </div>
  )
};

export default LogIn;
