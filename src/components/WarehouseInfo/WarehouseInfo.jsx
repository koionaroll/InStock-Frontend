import { Link, useParams } from "react-router-dom";

import deleteButton from "../../assets/Icons/delete_outline-24px.svg";
import { ReactComponent as Edit } from "../../assets/Icons/edit-24px.svg";
import arrowBack from "../../assets/Icons/chevron_right-24px.svg";
import "./WarehouseInfo.scss";

import React from "react";
const WarehouseInfo = ({
  id,
  warehouseName,
  address,
  contactName,
  contactPhone,
  contactEmail,
}) => {
  const warehouseId = useParams();

  return (
    <>
      <div className="warehouse">
        <div className="warehouse__block">
          <div className="warehouse__container">
            <p className="warehouse__title">warehouse</p>
            <div className="warehouse__second-container">
              <Link className="warehouse__link" to={id}>
                <p className="warehouse__info">{warehouseName}</p>
              </Link>
              <Link className="warehouse__link" to={`${id}`}>
                <img className="warehouse__info" src={arrowBack} />
              </Link>
            </div>
          </div>
          <div className="warehouse__container">
            <p className="warehouse__title">contact name</p>
            <p className="warehouse__info">{contactName}</p>
          </div>
          <div className="warehouse__container">
            <p className="warehouse__title">address</p>
            <p className="warehouse__info">{address}</p>
          </div>
          <div className="warehouse__container">
            <p className="warehouse__title">contact information</p>
            <div className="warehouse__secondary-container">
              <p className="warehouse__info warehouse__info--modifier">
                {contactPhone}
              </p>
              <p className="warehouse__info warehouse__info--modifier">
                {contactEmail}
              </p>
            </div>
          </div>
          <ul className="warehouse__container">
            <li className="warehouse__item">
              <img
                className="warehouse__delete-button"
                src={deleteButton}
                alt="warehouse-delete-button"
              />
            </li>
            <li className="warehouse__item">
              <Link
                className="warehouse__link--modifier"
                to={`warehouses/edit/${id}`}
              >
                <Edit className="warehouse__edit-button" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WarehouseInfo;
