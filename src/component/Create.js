import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Create(){
    const navigate = useNavigate();
const[email, setemail]= useState()
const[pass,setpass]= useState()
let url="https://6362424666f75177ea2a9925.mockapi.io/homework"



const postData2=()=>{
    axios.post(url,{
        email,pass
    }).then(res=>{
        console.log(res);
        localStorage.setItem("email", res.data.email)
        localStorage.setItem("pass", res.data.pass)
        localStorage.setItem("id", res.data.id)
        navigate("/Reader");


    })
    

}
return (
    <div>

        <input placeholder='email' onChange={e => { setemail(e.target.value) }}></input>
        <input placeholder='pass' onChange={e => { setpass(e.target.value) }}></input>
        <button onClick={postData2}>Login</button>
    </div>
)
}
export default Create;