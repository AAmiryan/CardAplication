import React from "react";
import {
  localStorageGetData,
  localStorageSetData,
  localStorageRemoveItem,
} from "../../utils/helpers";

import "./Header.css";

interface IHeader {
  updateData: React.Dispatch<React.SetStateAction<number[]>>;
}

const Header = ({ updateData }: IHeader) => {
  const handleAddCard = (): void => {
    const numbersArray: Array<number> = localStorageGetData();
    let newArray: number[] = [];

    let newNumber: number = Math.floor(Math.random() * 1000);
    while (newArray.indexOf(newNumber) !== -1) {
      newNumber = Math.floor(Math.random() * 1000);
    }
    newArray = [...numbersArray, newNumber];

    updateData(newArray);
    localStorageSetData(newArray);
  };

  const handleSortCard = (): void => {
    const numbersArray: Array<number> = localStorageGetData();
    const sortArray = [...numbersArray].sort((a, b) => a - b);
    updateData(sortArray);
    localStorageSetData(sortArray);
  };

  const handleClear = (): void => {
    localStorageRemoveItem();
    updateData([]);
  };

  return (
    <div className="headerContainer">
      <button onClick={handleAddCard}>Add card</button>
      <button onClick={handleSortCard}>Sort cards</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Header;
