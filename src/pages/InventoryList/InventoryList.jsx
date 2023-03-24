import { useEffect, useState } from "react";
import axios from "axios";

import InventoryInfo from "../../components/InventoryInfo/InventoryInfo";

import arrowBack from "../../assets/Icons/chevron_right-24px.svg";

const InventoryList = () => {
  //We set our data state to an empty array
  const [data, setData] = useState([]);

  const apiUrl = "http://localhost:5050";

  const getInventory = () => {
    axios
      .get(apiUrl + "/inventory")
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getInventory();
    document.title = "Inventory Page";
  }, []);
  return data ? (
    <div className="warehouse-list">
      <div className="warehouse__info--big-screens">
        <div className="warehouse__wrapper">
          <p className="warehouse__title--big-screens">warehouse</p>
          <img className="warehouse__image" src={arrowBack} alt="" />
        </div>
        <div className="warehouse__wrapper">
          <p className="warehouse__title--big-screens">address</p>
          <img className="warehouse__image" src={arrowBack} />
        </div>
        <div className="warehouse__wrapper">
          <p className="warehouse__title--big-screens">contact name</p>
          <img className="warehouse__image" src={arrowBack} alt="" />
        </div>
        <div className="warehouse__wrapper">
          <p className="warehouse__title--big-screens">contact information</p>
          <img className="warehouse__image" src={arrowBack} />
        </div>
        <div className="warehouse__wrapper">
          <p className="warehouse__title--big-screens warehouse__title--big-screens--modifier">
            actions
          </p>
        </div>
      </div>
      {data.map((warehouse) => {
        return (
          <InventoryInfo
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
export default InventoryList;
