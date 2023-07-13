import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserContext from "./context/UserContext";
import { ListItemText } from "@mui/material";
import Home from "./pages/Home";




const App = () => {
  return (

<>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<ListItemText/>} />
     
    </Routes>
  </Router>


  </>



  )
}

export default App;

