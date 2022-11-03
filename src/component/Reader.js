import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Reader() {
    
  const [state, setState] = useState([]);

  let url = "https://6362424666f75177ea2a9925.mockapi.io/homework"

  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data)


    })
  }, [])

  const Deleteinf = (id) => {
    console.log(id);
    axios.delete(`https://6362424666f75177ea2a9925.mockapi.io/homework/${id}`).then(res => {
      console.log(res);
      setState(state.filter(del => {
        return del.id != id;
      }))
    })


    
  

  };



  return (
    <div>



      {state.map((data ,index)=> {
        return (
          <div key={index}>
            <p> id: {data.id}</p>
            <p>email: {data.email}</p>
              <p>pass: {data.pass}</p>
            <button onClick={() => { Deleteinf(data.id) }}> delete </button>
            <Link to="/Update"> <button onClick={() => localStorage.setItem("id", data.id)}>Update</button></Link>
          </div>
        )
      }
      )
      }
    </div>



  )
}

export default Reader;