import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/table-slice";
import { Rings } from "react-loader-spinner";

import CampaignTableRow from "./CampaignTableRow";

import "./CampaignTable.css";

export default function CampaignTable() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tableslice.loading);

  useEffect(() => {
    dispatch(tableActions.setLoadingTrue());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(tableActions.addToCampaigns(data)))
      .finally(dispatch(tableActions.setLoadingFalse()));
  }, []);

  const campaigns = useSelector((state) => state.tableslice.campaigns);

  const nameSearchInputValue =
    useSelector((state) => state.inputsslice.inputText) || "";

  const selectedStartDate = useSelector((state) => state.inputsslice.startDate);

  const selectedEndDate = useSelector((state) => state.inputsslice.endDate);
  const startDate = new Date(selectedStartDate).getTime() || 0;

  const endDate =
    new Date(selectedEndDate).getTime() || new Date().getTime() * 10;

  let filteredCampaigns;
  if (startDate > 0 || endDate > 0 || nameSearchInputValue?.length > 0) {
    filteredCampaigns = campaigns.filter(
      (campaign) =>
        new Date(campaign.startDate).getTime() >= startDate &&
        new Date(campaign.endDate).getTime() <= endDate &&
        campaign.name.toLowerCase().includes(nameSearchInputValue.toLowerCase())
    );
  } else filteredCampaigns = campaigns;

  return (
    <table>
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>User Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Active</th>
          <th>Budget</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <>
            <Rings color="blue" />
            <div>Loading...</div>
          </>
        )}
        {!loading &&
          filteredCampaigns.map((campaign) => {
            return (
              <CampaignTableRow
                key={campaign.id}
                id={campaign.id}
                username={campaign.user.username}
                name={campaign.name}
                startDate={campaign.startDate}
                endDate={campaign.endDate}
                userId={campaign.userId}
                budget={campaign.Budget}
              />
            );
          })}
      </tbody>
    </table>
  );
}
