import { createSlice } from "@reduxjs/toolkit";

import mockedCampaigns from "../campaigns.json";

export const UNKNOWN_USER = {
  username: "Unknown User",
};

const initialState = {
  campaigns: [],
  loading: false,
};

export const tableSlice = createSlice({
  name: "tableslice",
  initialState,
  reducers: {
    addToCampaigns(state, action) {
      state.campaigns = mockedCampaigns.map((campaign) => {
        return {
          ...campaign,
          user:
            action.payload.find((user) => user.id === campaign.userId) ||
            UNKNOWN_USER,
        };
      });
    },
    addNewCampaigns(state, action) {
      state.campaigns.push({ ...action.payload, user: UNKNOWN_USER });
    },
    addCampaignFromConsole(state, action) {
      const arr = action.payload.map((campaign) => {
        return {
          ...campaign,
          user: UNKNOWN_USER,
        };
      });
      console.log(arr);
      state.campaigns = state.campaigns.concat(arr);
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
  },
});

export const tableActions = tableSlice.actions;
