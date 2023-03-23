import deleteButton from "../../assets/Icons/delete_outline-24px.svg";
import editButton from "../../assets/Icons/edit-24px.svg";
import "./WarehouseInfo.scss";
import { Link } from "react-router-dom";

import React from "react";
const WarehouseInfo = ({
  warehouseName,
  address,
  contactName,
  contactPhone,
  contactEmail,
}) => {
  return (
    <div className="warehouse">
      <div className="warehouse__info">
        <div className="warehouse__description-container">
          <p className="warehouse__description-title">warehouse</p>
          <p className="warehouse__description-info">{warehouseName}</p>
        </div>
        <div className="warehouse__name-container">
          <p className="warehouse__name-title">contact name</p>
          <p className="warehouse__name-info">{contactName}</p>
        </div>
        <div className="warehouse__address-container">
          <p className="warehouse__address-title">address</p>
          <p className="warehouse__address-info">{address}</p>
        </div>
        <div className="warehouse__contact-container">
          <p className="warehouse__contact-title">contact information</p>
          <div className="warehouse__contact-info">
            <p className="warehouse-contact__phone">{contactPhone}</p>
            <p className="warehouse-contact__email">{contactEmail}</p>
          </div>
        </div>
      </div>
      <div className="warehouse__buttons">
        <Link>
          <img
            className="warehouse__delete-button"
            src={deleteButton}
            alt="warehouse-delete-button"
          />
        </Link>
        <Link className="warehouse__link">
          <img
            className="warehouse__edit-button"
            src={editButton}
            alt="warehouse-edit-button"
          />
        </Link>
      </div>
    </div>
  );
};

export default WarehouseInfo;
