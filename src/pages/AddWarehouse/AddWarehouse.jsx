import "../AddWarehouse/AddWarehouse.scss"
import AddPageMain from "../../components/AddPageMain/AddPageMain";
import WarehousePageForm from "../../components/WarehousePageForm/WarehousePageForm";

const AddWarehouse = () => {
    const placeHolderInfo = {
        name: "Warehouse Name",
        streetAddress: "Street Address",
        city: "City",
        country: "Country",
        contact: "Contact Name",
        position: "Position",
        phone: "Phone Number",
        email: "Email"
    };

    return ( 
        <>
            <AddPageMain title={"Warehouse"} />
            <WarehousePageForm  placeHolderInfo={placeHolderInfo}/>
        </>
     );
}
 
export default AddWarehouse;