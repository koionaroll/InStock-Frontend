import React from "react";
import "./WarehouseDetails.scss";

import WarehouseDetailsList from "../../components/WarehouseDetailsList/WarehouseDetailsList";

function WarehouseDetails({ apiUrl }) {
  return (
    <>
      <div className="WarehouseDetails--layout">
        <WarehouseDetailsList apiUrl={apiUrl} />
      </div>
    </>
  );
}

export default WarehouseDetails;
