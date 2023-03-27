import "../AddWarehouse/AddWarehouse.scss";
import WarehousePageForm from "../../components/WarehousePageForm/WarehousePageForm";
import PageMainAction from "../../components/PageMainAction/PageMainAction";

const AddWarehouse = () => {
  document.title = "Add Warehouse";

  const placeHolderInfo = {
    warehouse_name: "Warehouse Name",
    address: "Street Address",
    city: "City",
    country: "Country",
    contact_name: "Contact Name",
    contact_position: "Position",
    contact_phone: "Phone Number",
    contact_email: "Email",
  };

  return (
    <>
      <div className="layout2">
        <div className="layout1">
          <PageMainAction title={"Warehouse"} type={"Add"} />
          <WarehousePageForm
            formType={"Add"}
            placeHolderInfo={placeHolderInfo}
          />
        </div>
      </div>
    </>
  );
};

export default AddWarehouse;
