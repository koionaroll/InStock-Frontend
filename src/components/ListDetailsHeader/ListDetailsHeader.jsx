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
            Washington
            {
              // prop.title
            }
          </h1>
        </div>
        <img className="header--edit" src={edit} alt="" />
      </div>
      <div className="contact--container">
        <div>
          <p className="contact--label">WAREHOUSE ADDRESS:</p>
          <p className="contact--details">
            33 Pearl Street SW, Washington, USA
            {
              //prop.address
            }
          </p>
        </div>
        <div>
          <p className="contact--label">CONTACT NAME:</p>
          <p className="contact--details">
            Graeme Lyon{" "}
            {
              //prop.name
            }
          </p>
          <p className="contact--details">
            Warehouse Manager{" "}
            {
              //prop.role
            }
          </p>
        </div>
        <div>
          <p className="contact--label">CONTACT INFORMATION:</p>
          <p className="contact--details">
            +1 (647) 504-0911{" "}
            {
              //prop.phone
            }
          </p>
          <p className="contact--details">
            glyon@instock.com{" "}
            {
              //prop.email
            }
          </p>
        </div>
      </div>
    </>
  );
}

export default ListDetailsHeader;
