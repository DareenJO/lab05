import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function Update(){
    const navigate = useNavigate();
    let url="https://6362424666f75177ea2a9925.mockapi.io/homework"

    const[email, setemail]= useState("")
    const[pass,setpass]= useState("")
    const [id, setId] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setemail(localStorage.getItem("pass"));
        setpass(localStorage.getItem("email"));
    }, []);



    const updateinf= () => {
        axios.put(`https://6362424666f75177ea2a9925.mockapi.io/homework/${id}`, {
            email,
            pass,

        }).then(res => {
            console.log(res.id);
            navigate("/Reader");
        })
    }




return(


    <>
<input   placeholder="email" onChange={e=>{setemail(e.target.value)}}></input>
    <input   placeholder="pass"    onChange={e=>{setpass(e.target.value)}}></input>
    <button onClick={updateinf}>update </button>

    </>


)


}


export default Update;