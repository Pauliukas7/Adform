import "./CampaignTableRow.css";

export default function CampaignTableRow(props) {
  const todaysDateInMillis = new Date().getTime();
  return (
    <tr className="table-row">
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
      <td>
        {todaysDateInMillis < new Date(props.endDate).getTime() &&
        todaysDateInMillis > new Date(props.startDate).getTime() ? (
          <div>
            {" "}
            <span className="active">&#9679; </span>
            <span>Active</span>
          </div>
        ) : (
          <div>
            {" "}
            <span className="inactive">&#9679; </span>
            <span>Inactive</span>
          </div>
        )}
      </td>
      <td>{props.budget} USD</td>
    </tr>
  );
}
