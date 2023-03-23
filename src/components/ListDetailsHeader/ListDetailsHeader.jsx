import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./ListDetailsHeader.scss";
import sort from "../../assets/Icons/sort-24px.svg";

function ListDetailsHeader({ prop }) {
  return (
    <>
        <div className="header--background">
      <div className="header--container">
          <div className="header--location-container">
            <img className="header--back" src={backArrow} alt="" />
            <h1 className="header--location">Washington</h1>
          </div>
          <img className="header--edit" src={edit} alt="" />
        </div>
      </div>
      <div className="contact--container">
        <div>
          <p className="contact--label">WAREHOUSE ADDRESS:</p>
          <p className="contact--details">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="contact--container--tablet">
          <div>
            <p className="contact--label">CONTACT NAME:</p>
            <p className="contact--details">Graeme Lyon</p>
            <p className="contact--details">Warehouse Manager</p>
          </div>
          <div>
            <p className="contact--label">CONTACT INFORMATION:</p>
            <p className="contact--details">+1 (647) 504-0911</p>
            <p className="contact--details">glyon@instock.com</p>
          </div>
        </div>
      </div>
      <div className="details--label--container">
        <p className="details--label--tablet">
          INVENTORY ITEM <img src={sort} alt="" />
        </p>
        <p className="details--label--tablet">
          CATEGORY <img src={sort} alt="" />
        </p>
        <p className="details--label--tablet">
          STATUS <img src={sort} alt="" />
        </p>
        <p className="details--label--tablet">
          QUANTITY <img src={sort} alt="" />
        </p>
        <p className="details--label--tablet--action">ACTIONS</p>
      </div>
    </>
  );
}

export default ListDetailsHeader;
