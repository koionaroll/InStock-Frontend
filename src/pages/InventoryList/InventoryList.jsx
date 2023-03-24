import { useEffect, useState } from "react";
import axios from "axios";

import InventoryItem from "../../components/InventoryItem/InventoryItem";
import sort from "../../assets/Icons/sort-24px.svg";

import "./InventoryList.scss";

const InventoryList = () => {
  //We set our data state to an empty array
  const [data, setData] = useState([]);

  const apiUrl = "http://localhost:5050";

  const getInventory = () => {
    axios
      .get(apiUrl + "/inventories")
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
    <div className="inventory-list--layout">
      <div className="inventory-list">
        <div className="inventory__info--big-screens">
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">inventory item</p>
            <img className="inventory__image" src={sort} alt="" />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">category</p>
            <img className="inventory__image" src={sort} />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">status</p>
            <img className="inventory__image" src={sort} alt="" />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">qty</p>
            <img className="inventory__image" src={sort} />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">warehouse</p>
            <img className="inventory__image" src={sort} />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens inventory__title--big-screens--modifier">
              actions
            </p>
          </div>
        </div>
        {data.map((inventory) => {
          // console.log(getWarehouse(inventory.warehouse_id));
          return (
            <InventoryItem
              apiUrl={apiUrl}
              warehouseId={inventory.warehouse_id}
              key={inventory.id}
              id={inventory.id}
              itemName={inventory.item_name}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
            />
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
};
export default InventoryList;
