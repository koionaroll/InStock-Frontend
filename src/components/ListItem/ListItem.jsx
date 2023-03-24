import React from "react";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./ListItem.scss";


function ListItem() {

  return (
    <>
      <div className="details--container">
        <div className="details--label--tablet">
          <p className="details--label">INVENTORY ITEM</p>
          <p className="details--info-item">Televisions <img src={chevron} alt="" /></p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">CATEGORY</p>
          <p className="details--info">Electronics </p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">STATUS</p>
          <p className="details--info">INSTOCK</p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">QUANTITY</p>
          <p className="details--info">500</p>
        </div>
        <div className=" button--container">
          <button className="button--delete">
            <img src={trash} alt="" />
          </button>
          <button className="button--edit-1">
            <img src={edit} alt="" />
          </button>
        </div>
        <button className="button--edit-2">
          <img src={edit} alt="" />
        </button>
      </div>
    </>
  );
}

export default ListItem;
