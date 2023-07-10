import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
