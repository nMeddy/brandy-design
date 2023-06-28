import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Header/>}>
        
      </Route>
    </Routes>
      
    </>
  );
}

export default App;
