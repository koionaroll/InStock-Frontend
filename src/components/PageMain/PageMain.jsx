import { Link } from "react-router-dom";
import "../PageMain/PageMain.scss";
import { useState } from "react";

const PageMain = ({ pageName }) => {
  return (
    <>
      <section className="main__section">
        <div className="main__section-title-container">
          <h1 className="main__section-title-text">
            {" "}
            {`${pageName === "Warehouse" ? "Warehouses" : "Inventory"}`}{" "}
          </h1>
        </div>
        <div className="main__section-input-layout">
          <div className="main__section-input-container">
            <input
              className="main__section-input"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="main__section-button-container">
            {/* <button className="main__section-button"> + Add New {pageName} </button> */}
            <Link
              className="main__section-button"
              to={`${
                pageName === "Warehouse" ? "/warehouse/add" : "/inventory/add"
              }`}
            >
              + Add New {`${pageName === "Warehouse" ? "Warehouse" : "Item"}`}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageMain;
