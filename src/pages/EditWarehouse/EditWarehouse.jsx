
import "../EditWarehouse/EditWarehouse.scss";
import PageMainAction from "../../components/PageMainAction/PageMainAction";
import WarehousePageForm from "../../components/WarehousePageForm/WarehousePageForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditWarehouse = () => {
    
    // get the warehosue Id from the url
    const {warehouseId} = useParams();
    const [warehouse, setWarehouse] = useState({});
    let result = {};
    // const {placeHolderInfo, setPlaceHolderInfo} = useState({});
    // test delete later
    console.log("Warehosue Id is", warehouseId)

    // get the warehouse using axios
    const getWarehouse = () => {
        console.log("here")
        const url = `http://localhost:5050/warehouses/${warehouseId}`;
        axios
        .get(url)
        .then(response => {
            // console.log("here")
            console.log(response.data.address);
            setWarehouse(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(`Could not find a warehouse ${err}`);
        })
    }

    useEffect(() => {
        console.log("here123")
        if (warehouseId) {
            getWarehouse(warehouseId);
        }
        // console.log(warehouse.warehouse_name)
        // console.log(warehouse)
        // setPlaceHolderInfo(warehouse)
        document.title = 'Edit Warehouse';
    }, []);


    return (

        warehouse ?
        <>
            <PageMainAction title={"Warehouse"} type={"Edit"} />
            <WarehousePageForm  formType={"Edit"} placeHolderInfo={warehouse}/>
        </>
        : ""

    );
}

export default EditWarehouse;