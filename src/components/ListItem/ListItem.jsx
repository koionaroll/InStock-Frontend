import React from "react";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import { ReactComponent as Edit } from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./ListItem.scss";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function ListItem({ element }) {
  const [inStock, setStock] = useState(false);
  useEffect(() => {
    if (element.quantity === 0) {
      setStock(false);
    } else {
      setStock(true);
    }
  }, [element.quantity]);

  return (
    <div className="details--container">
      <div className="details--label--tablet">
        <Link to="/inventory/:itemId" className="details--info-item"> 
        <p className="details--label">INVENTORY ITEM</p>
        <p className="details--info-item">
          {element.item_name}
          <img src={chevron} alt="" />
        </p>
        </Link>
      </div>
      <div className="details--label--tablet">
        <p className="details--label">CATEGORY</p>
        <p className="details--info">{element.category}</p>
      </div>
      <div className="details--label--tablet">
        <p className="details--label">STATUS</p>
        <p
          className={
            inStock
              ? "warehouse__info warehouse__status warehouse__status--instock"
              : "warehouse__info warehouse__status warehouse__status--out-of-stock"
          }
        >
          {inStock ? "in stock" : "out of stock"}
        </p>
      </div>
      <div className="details--label--tablet">
        <p className="details--label">QUANTITY</p>
        <p className="details--info">{element.quantity} </p>
      </div>
      <div className=" button--container">
        <button className="button--delete">
          <img src={trash} alt="" />
        </button>
        <Edit className="button--edit-1" />
      </div>
      <Edit className="button--edit-2" />
    </div>
  );
}

export default ListItem;
