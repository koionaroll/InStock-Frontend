import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./ListDetailsHeader.scss";

function ListDetailsHeader({ prop }) {
  return (
    <>
      <div className="header--container">
        <div className="header--location-container">
          <img className="header--back" src={backArrow} alt="" />
          <h1 className="header--location">
            {
              // prop.title
            }
          </h1>
        </div>
        <img className="header--edit" src={edit} alt="" />
      </div>
      <div className="contact--container">
        <p className="contact--label">WAREHOUSE ADDRESS:</p>
        <p className="contact--details">33 Pearl Street SW, Washington, USA</p>
        <p className="contact--label">CONTACT NAME:</p>
        <div>
          <p className="contact--details">Graeme Lyon </p>
          <p className="contact--details">Warehouse Manager</p>
        </div>
        <p className="contact--label">CONTACT INFORMATION:</p>
        <div>
          <p className="contact--details">+1 (647) 504-0911</p>
          <p className="contact--details">glyon@instock.com</p>
        </div>
      </div>
    </>
  );
}

export default ListDetailsHeader;
