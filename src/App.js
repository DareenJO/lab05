import React ,{useEffect, useState} from 'react'
import './App.css';
import Reader from './component/Reader';
import Create from './component/Create';
import Update from './component/Update'
import {
  Routes,
  Route,
  Link 
} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {



  return (
  

 

<Router>
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/reader" element={<Reader />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      </Router>
   
  

  

 

  );
}

export default App;
