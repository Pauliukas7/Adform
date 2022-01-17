import DatePicker from "react-datepicker";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/table-slice";

import "react-datepicker/dist/react-datepicker.css";
import "./AddCampaignBox.css";

export default function AddCampaignBox() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const campaignNameRef = useRef();

  const budgetRef = useRef();
  const idRef = useRef();

  const dispatch = useDispatch();

  const addCampaignHandler = () => {
    if (
      idRef.current.value.length > 0 &&
      startDate.toString().length > 0 &&
      endDate.toString().length > 0 &&
      campaignNameRef.current.value.length > 0 &&
      budgetRef.current.value.length > 0
    ) {
      const campaign = {
        id: idRef.current.value,
        name: campaignNameRef.current.value,
        startDate: startDate.toLocaleString().split(",")[0],
        endDate: endDate.toLocaleString().split(",")[0],
        Budget: budgetRef.current.value,
        user: "Unknown User",
      };
      dispatch(tableActions.addNewCampaigns(campaign));
    }
  };

  return (
    <div className="add-container">
      <div className="add-new-text">Add a new campaign</div>

      <div className="input-fields">
        <input type="number" placeholder="ID" ref={idRef} />
        <input type="text" placeholder="Campaign name" ref={campaignNameRef} />

        <input type="number" placeholder="Budget" ref={budgetRef} />
        <div className="datepickers">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearDropdown
            scrollableYearDropdown
            placeholderText="Start-Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            showYearDropdown
            scrollableYearDropdown
            placeholderText="End-Date"
          />
        </div>
      </div>
      <button className="add-campaign-button" onClick={addCampaignHandler}>
        Add a new Campaign
      </button>
    </div>
  );
}
