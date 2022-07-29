import { useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Instruction from "../Instruction/Instruction";
import { localStorageGetData } from "../../utils/helpers";

import "./Main.css";

const numberData = localStorageGetData();
const Main = () => {
  const [data, setData] = useState<number[] | []>(numberData);

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <Header updateData={setData} />
        <div className={data.length <= 2 ? "main" : "scroll"}>
          {data?.map((num: number) => (
            <Card num={num} key={num} updateData={setData} />
          ))}
        </div>
        <Footer />
      </div>
      <div className="instructionContainer">
        <Instruction />
      </div>
    </div>
  );
};

export default Main;
