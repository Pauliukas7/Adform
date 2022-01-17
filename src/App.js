import { useDispatch } from "react-redux";
import { tableActions } from "./store/table-slice";

import MainPage from "./components/MainPage";

function App() {
  const dispatch = useDispatch();
  window.AddCampaign = (campaignsArr) => {
    dispatch(tableActions.addCampaignFromConsole(campaignsArr));
  };

  return (
    <div>
      <MainPage />;
    </div>
  );
}

export default App;
