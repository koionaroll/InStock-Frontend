import { useEffect, useState } from "react";
import axios from "axios";

import InventoryItem from "../../components/InventoryItem/InventoryItem";

import PageMain from "../../components/PageMain/PageMain";
import sort from "../../assets/Icons/sort-24px.svg";

import "./InventoryList.scss";

const InventoryList = ({ apiUrl }) => {
  //We set our data state to an empty array
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  /*We initialize itemSort to an empty string. 
  Later on we will reassign it to the name of the column that needs to be sorted */

  const [itemSort, setitemSort] = useState("");

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
  const handleSortTarget = (sortValue) => {
    setitemSort(sortValue);
    handleSortEvent(sortValue);
  };
  const handleSortEvent = (sortValue) => {
    const sortedData = data;
    if (typeof sortedData[0][sortValue] === "number") {
      sortedData.sort((a, b) => b[sortValue] - a[sortValue]);
      setSortedData(sortedData);
    } else {
      sortedData.sort((a, b) => {
        if (a[sortValue] < b[sortValue]) {
          return -1;
        }
        if (a[sortValue] > b[sortValue]) {
          return 1;
        }
        return 0;
      });
      setSortedData(sortedData);
    }
  };

  useEffect(() => {
    getInventory();
    document.title = "Inventory Page";
  }, []);
  useEffect(() => {
    getInventory();
    document.title = "Inventory Page";
  }, [data]);

  return data ? (
    <div className="inventory-list--layout">
      <PageMain pageName={"Inventory"} />
      <div className="inventory-list">
        <div className="inventory__info--big-screens">
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">inventory item</p>
            <img
              className="inventory__image"
              src={sort}
              onClick={() => handleSortTarget("item_name")}
            />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">category</p>
            <img
              className="inventory__image"
              src={sort}
              onClick={() => handleSortTarget("category")}
            />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">status</p>
            <img
              className="inventory__image"
              src={sort}
              onClick={() => handleSortTarget("status")}
            />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">qty</p>
            <img
              className="inventory__image"
              src={sort}
              onClick={() => handleSortTarget("quantity")}
            />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens">warehouse</p>
            <img
              className="inventory__image"
              src={sort}
              onClick={() => handleSortTarget("warehouse_id")}
            />
          </div>
          <div className="inventory__wrapper">
            <p className="inventory__title--big-screens inventory__title--big-screens--modifier">
              actions
            </p>
          </div>
        </div>
        <div className="inventory-list--align">
          {sortedData.length
            ? sortedData.map((inventory) => {
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
              })
            : data.map((inventory) => {
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
    </div>
  ) : (
    ""
  );
};
export default InventoryList;
