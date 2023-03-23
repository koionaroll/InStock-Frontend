import "./WarehouseDetailsList.scss";
import ListItem from "../ListItem/ListItem";
import ListDetailsHeader from "../ListDetailsHeader/ListDetailsHeader";

function WarehouseDetailsList() {
  return (
    <>
      <div className="list">
        <ListDetailsHeader />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}

export default WarehouseDetailsList;
