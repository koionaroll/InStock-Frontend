import { useEffect, useState } from "react";
import axios from "axios";

import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo";
import PageMain from "../../components/PageMain/PageMain";

import sort from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = ({ apiUrl }) => {
  //We set our data state to an empty array
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getWarehouses();
    console.log("hala madrid");
    document.title = "Warehouses Page";
  }, [data.length]);

  return data ? (
    <div className="warehouse-list--layout">
      <PageMain pageName={"Warehouse"}></PageMain>
      <div className="warehouse-list">
        <div className="warehouse__info--big-screens">
          <div className="warehouse__wrapper">
            <p className="warehouse__title--big-screens">warehouse</p>
            <img className="warehouse__image" src={sort} alt="" />
          </div>
          <div className="warehouse__wrapper">
            <p className="warehouse__title--big-screens">contact name</p>
            <img className="warehouse__image" src={sort} />
          </div>
          <div className="warehouse__wrapper">
            <p className="warehouse__title--big-screens">address</p>
            <img className="warehouse__image" src={sort} alt="" />
          </div>
          <div className="warehouse__wrapper">
            <p className="warehouse__title--big-screens">contact information</p>
            <img className="warehouse__image" src={sort} />
          </div>
          <div className="warehouse__wrapper">
            <p className="warehouse__title--big-screens warehouse__title--big-screens--modifier">
              actions
            </p>
          </div>
        </div>
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
              getWarehouses={getWarehouses}
            />
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
};

export default WarehouseList;
