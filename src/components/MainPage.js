import React from "react";
import AddCampaignBox from "./AddCampaignBox";
import CampaignTable from "./CampaignTable";
import InputFields from "./InputFields";

export default function MainPage() {
  return (
    <div>
      <InputFields />
      <CampaignTable />
      <AddCampaignBox />
    </div>
  );
}
