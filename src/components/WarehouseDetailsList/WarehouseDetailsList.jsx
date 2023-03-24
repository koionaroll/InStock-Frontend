import "./WarehouseDetailsList.scss";
import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import ListDetailsHeader from "../ListDetailsHeader/ListDetailsHeader";
import axios from "axios"
import { useParams, Link} from "react-router-dom";


function WarehouseDetailsList() {
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const  {warehouseId}  = useParams();
  const apiUrl = "http://localhost:5050";

  console.log(warehouseId)
  
  useEffect(() => {
  getData();
  document.title = "warehouseIDname";
  }, []);

  const getData = () =>{
    axios
    .get(apiUrl + "/warehouses/"+ warehouseId)
    .then((res) => {
      setSelectedWarehouse(res.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  };
  console.log(selectedWarehouse.warehouse_name)
  

  
  return (
    <>
      <div className="layout">
        <ListDetailsHeader warehouseInfo = {selectedWarehouse}/>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}


export default WarehouseDetailsList;
