import React from "react";
import { localStorageGetData, localStorageSetData } from "../../utils/helpers";

import "./Card.css";

interface ICard {
  num: number;
  updateData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Card = ({ num, updateData }: ICard) => {
  const handleDelate = (): void => {
    const numbersArray: Array<number> = localStorageGetData();

    const filterArray = numbersArray.filter((item: number) => num !== item);

    updateData(filterArray);
    localStorageSetData(filterArray);
  };

  return (
    <div className="cardContainer">
      <div className="xContainer">
        <span onClick={handleDelate}>X</span>
      </div>
      <div className="numberContainer">{num}</div>
    </div>
  );
};

export default Card;
