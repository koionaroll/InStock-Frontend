import React from "react";
import "./WarehouseDetails.scss";

import WarehouseDetailsList from "../../components/WarehouseDetailsList/WarehouseDetailsList";

function WarehouseDetails() {
  return (
    <>
        <div className="WarehouseDetails--layout">
          <WarehouseDetailsList />
        </div>
    </>
  );
}

export default WarehouseDetails;
