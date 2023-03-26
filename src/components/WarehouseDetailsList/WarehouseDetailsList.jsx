import "./WarehouseDetailsList.scss";
import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import ListDetailsHeader from "../ListDetailsHeader/ListDetailsHeader";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function WarehouseDetailsList() {
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const [inventory, setInventory] = useState([]);
  const { warehouseId } = useParams();
  const apiUrl = "http://localhost:5050";

  const getWarehouseData = () => {
    axios
    .get(apiUrl + "/warehouses/" + warehouseId)
    .then((res) => {
      setSelectedWarehouse(res.data);
    })
    .catch((error) => {
        console.error("Error: ", error);
      });
    };
    
    const getInventoryData = () => {
      axios
      .get(apiUrl + "/warehouses/" + warehouseId + "/inventories")
      .then((res) => {
        setInventory(res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    };
    useEffect(() => {
      getWarehouseData();
      getInventoryData();
    }, []);
    document.title = selectedWarehouse.warehouse_name;

    
    return (
      <>
      <div className="layout">
        <ListDetailsHeader warehouseInfo={selectedWarehouse} />
        {inventory.map((element) => (
          <ListItem element={element} key={element.id} warehouseInfo={selectedWarehouse}/>
        ))}
      </div>
    </>
  );
}

export default WarehouseDetailsList;
