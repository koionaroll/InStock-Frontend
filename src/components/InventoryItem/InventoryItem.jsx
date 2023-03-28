import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Edit } from "../../assets/Icons/edit-24px.svg";

import deleteButton from "../../assets/Icons/delete_outline-24px.svg";
import editButton from "../../assets/Icons/edit-24px.svg";
import arrowBack from "../../assets/Icons/chevron_right-24px.svg";

import "./InventoryItem.scss";
import { useEffect, useState } from "react";
import InventoryModal from "../InventoryModal/InventoryModal";
const InventoryItem = ({
  apiUrl,
  warehouseId,
  id,
  itemName,
  category,
  status,
  quantity,
  getInventory
}) => {
  const [inStock, setStock] = useState(false);
  const [warehouseName, setWarehouseName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const getWarehouse = (warehouseId) => {
    axios
      .get(apiUrl + "/warehouses/" + warehouseId)
      .then((response) => {
        const responseData = response.data;
        setWarehouseName(responseData.warehouse_name);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getWarehouse(warehouseId);
  }, []);

  useEffect(() => {
    if (quantity === 0) {
      setStock(false);
    } else {
      setStock(true);
    }
  }, [quantity]);
  return (
    <>
      <InventoryModal itemName={itemName} setOpenModal={setOpenModal} id={id} openModal={openModal} resetData={getInventory}/>
      <div className="inventory">
        <div className="inventory__block">
          <div className="inventory__container">
            <p className="inventory__title">inventory item</p>
            <div className="inventory__second-container">
              <Link state={warehouseId} className="inventory__link" to={`/inventory/${id}`}>
                <p className="inventory__info">{itemName}</p>
              </Link>
              <Link state={warehouseId} className="inventory__link" to={`/inventory/${id}`}>
                <img className="inventory__info" src={arrowBack} />
              </Link>
            </div>
          </div>
          <div className="inventory__container">
            <p className="inventory__title">status</p>
            <p
              className={
                inStock
                  ? "inventory__info inventory__status inventory__status--instock"
                  : "inventory__info inventory__status inventory__status--out-of-stock"
              }
            >
              {inStock ? "in stock" : "out of stock"}
            </p>
          </div>
          <div className="inventory__container">
            <p className="inventory__title">category</p>
            <p className="inventory__info">{category}</p>
          </div>
          <div className="inventory__container">
            <p className="inventory__title">qty</p>
            <p className="inventory__info">{quantity}</p>
          </div>
          <div className="inventory__container--empty"></div>
          <div className="inventory__container">
            <p className="inventory__title">warehouse</p>
            <p className="inventory__info">{warehouseName}</p>
          </div>
          <ul className="inventory__container">
            <li className="inventory__item" onClick={()=>setOpenModal(true)}>
              <img
                className="inventory__delete-button"
                src={deleteButton}
                alt="inventory-delete-button"
              />
            </li>
            <li className="inventory__item">
              <Link
                className="inventory__link--modifier"
                to={`/inventory/edit/${id}`}
              >
                <Edit className="inventory__edit-button" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InventoryItem;
