import React from "react";
import "./InventoryItemDetails.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import back from "../../assets/Icons/arrow_back-24px.svg";
import { ReactComponent as Edit } from "../../assets/Icons/edit-24px.svg";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function InventoryItemDetails({ apiUrl }) {
  const [data, setData] = useState({});
  const location = useLocation();
  const warehouseName = location.state;
  const [name, setName] = useState({});
  const navigate = useNavigate();
  const warehouseInfo = location.state;
  const { itemId } = useParams();

  const [inStock, setStock] = useState(false);
  useEffect(() => {
    if (data.quantity === 0) {
      setStock(false);
    } else {
      setStock(true);
    }
  }, [data.quantity]);

  const getData = () => {
    axios
      .get(apiUrl + "/inventories/" + itemId)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const getName = () => {
    axios
      .get(apiUrl + "/warehouses/" + warehouseName)
      .then((res) => {
        setName(res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    if (warehouseName){
      getName();
    }
    if (itemId){
      getData()};
  }, []);

  document.title = `${data.item_name}`;

  return (
    <main>
      <section className="inventory1">
        <div className="inventory__header">
          <div className="inventory__title-item">
            <NavLink
              onClick={() => {
                navigate(-1);
              }}
              className="inventory__back__btn"
            >
              <img src={back} alt="back icon" />
            </NavLink>
            <h1>{data.item_name}</h1>
          </div>
          <NavLink to="/inventory/edit/:itemId" className="inventory__edit__btn">
            <Edit className="inventory__edit" />
            <p className="inventory__edit__btn--text">Edit</p>
          </NavLink>
        </div>

        <div className="inventory__details">
          <div className="inventory__column__1">
            <div className="inventory__description">
              <p className="inventory__sub__title">item description:</p>
              <p className="inventory__content">{data.description}</p>
            </div>
            <div className="inventory__category">
              <p className="inventory__sub__title">category:</p>
              <p className="inventory__content">{data.category}</p>
            </div>
          </div>
          <div className="inventory__column__2">
            <div className="inventory__status__quantity">
              <div className="inventory__status-1">
                <p className="inventory__sub__title">status:</p>
                <p
                  className={
                    inStock
                      ? "item__info item__status item__status--instock"
                      : "item__info item__status item__status--out-of-stock"
                  }
                >
                  {inStock ? "in stock" : "out of stock"}
                </p>
              </div>
              <div className="inventory__quantity">
                <p className="inventory__sub__title">quantity:</p>
                <p className="inventory__content">{data.quantity}</p>
              </div>
            </div>
            <div className="inventory__warehouse">
              <p className="inventory__sub__title">warehouse:</p>
              <p className="inventory__content">
                {warehouseInfo?.warehouse_name
                  ? warehouseInfo.warehouse_name
                  : name.warehouse_name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InventoryItemDetails;
