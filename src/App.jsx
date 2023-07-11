import { React } from "react";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotreEquipe from "./components/NotreEquipe/NotreEquipe";
import MyCarousel from "./components/Caroussel/Caroussel";
import "./App.css";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route index element={<NotreEquipe />}></Route>
      </Routes>

    </>
  );
}

export default App;
