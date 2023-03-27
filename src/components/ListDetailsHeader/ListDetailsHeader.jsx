import React from "react";
import {Link} from "react-router-dom"
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { ReactComponent as Edit } from "../../assets/Icons/edit-24px.svg";
import "./ListDetailsHeader.scss";
import sort from "../../assets/Icons/sort-24px.svg";



function ListDetailsHeader({ warehouseInfo }) {
  return (
    <>
      <div className="header--background">
        <div className="header--container">
          <div className="header--location-container">
            <Link to = "/">
              <img className="header--back" src={backArrow} alt=""/>
            </Link>
            <h1 className="header--location">{warehouseInfo.warehouse_name}</h1>
          </div>
          <div className="header--edit">
          <Link to = "/warehouse/edit">
            <Edit className="header--edit--color" />
            </Link>
            <p className="header--edit--label">Edit</p>
          </div>
        </div>
      </div>
      <div className="contact--container">
        <div>
          <p className="contact--label">WAREHOUSE ADDRESS:</p>
          <p className="contact--details">
          {warehouseInfo.address}          
          </p>
        </div>
        <div className="contact--container--tablet">
          <div>
            <p className="contact--label">CONTACT NAME:</p>
            <p className="contact--details">{warehouseInfo.contact_name}</p>
            <p className="contact--details">{warehouseInfo.contact_position}</p>
          </div>
          <div>
            <p className="contact--label">CONTACT INFORMATION:</p>
            <p className="contact--details">{warehouseInfo.contact_phone}</p>
            <p className="contact--details">{warehouseInfo.contact_email}</p>
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
