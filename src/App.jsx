import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPart from "./components/MainPart/MainPart";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
      <MainPart/>
      <Footer />
    </>
  );
}

export default App;
