import DatePicker from "react-datepicker";

import { useDispatch, useSelector } from "react-redux";

import { inputsActions } from "../store/inputs-slice";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./FilterInputs.css";

export default function Header() {
  // const startDate = useSelector((state) => state.inputsslice.startDate);
  // console.log(startDate);
  // const endDate = useSelector((state) => state.inputsslice.endDate);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  const startDateChangedHandler = (date) => {
    setStartDate(date);

    dispatch(inputsActions.setStartDate(date.toString()));
  };

  const endDateChangedHandler = (date) => {
    setEndDate(date);

    dispatch(inputsActions.setEndDate(date.toString()));
  };
  const name = useSelector((state) => state.inputsslice.inputText);
  const test = () => {
    console.log(name.payload);
  };

  const nameChangedHandler = (event) => {
    const name = event.target.value;

    dispatch(inputsActions.setInputText(name));
  };
  return (
    <div className="all-inputs">
      <div className="date-inputs">
        <DatePicker
          selected={startDate}
          onChange={(date) => startDateChangedHandler(date)}
          showYearDropdown
          scrollableYearDropdown
          placeholderText="Start-Date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => endDateChangedHandler(date)}
          minDate={startDate}
          showYearDropdown
          scrollableYearDropdown
          placeholderText="End-Date"
        />
      </div>
      <div className="name-input">
        <input
          type="text"
          placeholder="Search by name"
          onChange={nameChangedHandler}
        />
      </div>
      <button onClick={test}></button>
    </div>
  );
}
