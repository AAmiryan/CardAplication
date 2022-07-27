import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Instruction from "../Instruction/Instruction";
import './Main.css'

const Main = () => {
  return (
    <div className="container ">
      <div className="mainContainer">
        <Header />
        <Footer />
      </div>
      <div className="instructionContainer">
        <Instruction />
      </div>
    </div>
  );
};

export default Main;
