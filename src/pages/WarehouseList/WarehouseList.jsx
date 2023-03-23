import { useEffect, useState } from "react";
import axios from "axios";

import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo";
import "./WarehouseList.scss";

const WarehouseList = () => {
  //We set our data state to an empty array
  const [data, setData] = useState([]);

  const apiUrl = "http://localhost:5050";

  const getWarehouses = () => {
    axios
      .get(apiUrl + "/warehouses")
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getWarehouses();
    document.title = "Warehouses Page";
  }, []);
  return data ? (
    <div className="warehouse-list">
      {data.map((warehouse) => {
        return (
          <WarehouseInfo
            key={warehouse.id}
            id={warehouse.id}
            warehouseName={warehouse.warehouse_name}
            address={warehouse.address}
            contactName={warehouse.contact_name}
            contactPhone={warehouse.contact_phone}
            contactEmail={warehouse.contact_email}
          />
        );
      })}
    </div>
  ) : (
    ""
  );
};

export default WarehouseList;
