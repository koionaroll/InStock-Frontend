import "./WarehouseDetailsList.scss";
import ListItem from "../ListItem/ListItem";
import ListDetailsHeader from "../ListDetailsHeader/ListDetailsHeader";

function WarehouseDetailsList() {
  return (
    <>
      <div className="border-radius">
        <ListDetailsHeader />
        <ListItem />
      </div>
    </>
  );
}

export default WarehouseDetailsList;
