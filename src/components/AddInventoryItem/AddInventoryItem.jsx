import React from "react";

import "../AddInventoryItem/AddInventoryItem.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select'
import { useParams } from "react-router-dom";
import errorIcon from '../../assets/Icons/error-24px.svg'

import back from '../../assets/Icons/arrow_back-24px.svg';

function AddInventoryItem({apiUrl}) {

    // state variable for warehouse names used for warehouse dropdown
    const [warehouses, setWarehouses] = useState([]);
    const [inventories, setInventories] = useState([]);
    const [warehouseOptions, setWarehouseOptions] = useState([])
    const [categories, setCategories] = useState([])
    // const [warehouseOptions, setWarehouseOptions] = useState([])


    const navigate = useNavigate();
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("instock");
    const [quantity, setQuantity] = useState("");


    const [itemNameError, setItemNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [quantityError, setQuantityError] = useState(false);
    const [statusError, setStatusError] = useState(false)


    const filterWarehouseNames = (data) => {
        return data.filter((item, index) => data.indexOf(item) === index);
    }

    const getInventories = () => {
        const url =  `${apiUrl}/inventories`;
        axios
        .get(url)
        .then(response => {
            // console.log(response.data)
            setInventories(response.data)
            const options = [];
            inventories.forEach((inventory) => {
                options.push({ value: `${inventory.category}`, label: `${inventory.category}` })
            })
            setCategories(options);
            // console.log(warehouses);
        })
    }

    const getWarehouseNames = () => {
        const url =  `${apiUrl}/warehouses`;
        axios
        .get(url)
        .then(response => {
            // console.log(response.data);
            setWarehouses(response.data);
            const options = [];
            warehouses.forEach((warehouse) => {
                options.push({ value: `${warehouse.warehouse_name}`, name: `warehouseNameOption`, label: `${warehouse.warehouse_name}` })
            })
            setWarehouseOptions(options);
            // console.log(warehouses);
        }) 
        .catch(err => {
            console.log(`Could not find warehouses ${err}`)
        })
    }

    useEffect(() => {
        getWarehouseNames();
        // console.log("here")
        // console.log(warehouses)
    }, [warehouses])


    useEffect(() => {
        getInventories();
        // console.log("here")
        // console.log(inventories)
    }, [inventories])

    // console.log(warehouses)
    const handleInputChange = (event) => {
        
        const {name, value} = event.target;
        if (name === "itemName") {
            setItemName(value);
            value === "" ? setItemNameError(true) : setItemNameError (false);
        }
        if (name === "description") {
            setDescription(value);
            value === "" ? setDescriptionError(true) : setDescriptionError (false);
        }

        if (name === "quantity") {
            setQuantity(value);
            value === "" ? setQuantityError(true) : setQuantityError (false);
        }
        if (name === "status") {
            console.log(value)
            setStatus(value)
            // setStatu here
            value === "outofstock" ? setStatusError(true) : setStatusError(false);
            console.log(status)
        }
        // if (name === "warehouseNameOption") {
        //     console.log("heereerer")
        //     console.log(value)
        // }
    }

    const handleNameSelecChange = (choice) => {
        console.log(choice);
        
    }

   
  return (
    <>
    <main>
        <section className='addInventory'>
                
            <div className='addInventory__header'>                    
                <NavLink onClick={() => { navigate(-1); }} className='addInventory__back__btn'>    
                    <img src={back} alt="back icon" />
                </NavLink>
                <h1 className='addInventory__item'>Add New Inventory Item</h1>
            </div>  

            <form className="addInventory__main__form" id="form">    
                <div className="addInventory__wrapper">    
                    <div className="addInventory__section1">    
                        <div className="addInventory__details1">
                            <h1 className="addInventory__title">Item Details</h1>
                            
                            <div className="addInventory__form">
                                <label className="addInventory__subtitle" htmlFor="itemName">Item Name</label>
                                <input 
                                    className={`addInventory__input ${
                                        itemNameError ? "addInventory__input--error" : "" }`}
                                    placeholder="Item Name" 
                                    name="itemName" 
                                    id="itemName"
                                    value= {itemName}
                                    onChange={handleInputChange} 
                                    type="text"/>

                                <div className={`${
                                    itemNameError ? "addInventory__error" : "addInventory__valid"}`}>
                                    <img className={`${itemNameError ? "addInventory__error--icon" : ""}`}
                                        src={errorIcon}
                                        alt="error"/>
                                    <p className={`${itemNameError ? "addInventory__error--text" : ""}`}>
                                        {" "} This field is required{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="addInventory__form">
                                <label className="addInventory__subtitle" htmlFor="description">Description</label>
                                <input 
                                    className={`addInventory__input-1 ${
                                        itemNameError ? "addInventory__input--error" : "" }`}
                                    placeholder="Please enter a brief item description" 
                                    name="description" 
                                    id="description"
                                    value= {description}
                                    onChange={handleInputChange} 
                                    type="text"/>

                                <div className={`${
                                    descriptionError ? "addInventory__error" : "addInventory__valid"}`}>
                                    <img className={`${descriptionError ? "addInventory__error--icon" : ""}`}
                                        src={errorIcon}
                                        alt="error"/>
                                    <p className={`${descriptionError ? "addInventory__error--text" : ""}`}>
                                        {" "} This field is required{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="addInventory__form">
                                <label className="addInventory__subtitle" 
                                    htmlFor="category">Category</label>      
                                <Select  options={categories} />
                            </div>
                        </div>
                    </div>

                    <div className="addInventory__section2">    
                        <div className="addInventory__details2">
                            <h1 className="addInventory__title">Item Availability</h1>
                            
                            <div className="addInventory__form">
                                <p className="addInventory__subtitle" htmlFor="status">Status</p>
                                <div className="addInventory__status">
                                    <div className="addInventory__instock">
                                        <input onChange={handleInputChange} className="addInventory__input" name="status" id="instock" value="instock" type="radio"/>
                                        <label htmlFor="instock">In stock</label>
                                    </div>    
                                    <div className="addInventory__outofstock">    
                                        <input onChange={handleInputChange} className="addInventory__input" name="status" id="outofstock" value="outofstock" type="radio"/>
                                        <label htmlFor="instock">Out of Stock</label>
                                    </div>
                                </div>    
                             </div>


                            {/* <div className="addInventory__form addInventory__form--quantity"> */}
                            <div className={`addInventory__form ${statusError === true? " addInventory__form--quantity" : ""}`}>
                                <label className="addInventory__subtitle" htmlFor="quantity">Quantity</label>
                                <input 
                                    className={`addInventory__input ${
                                        quantityError ? "addInventory__input--error" : "" }`}
                                    placeholder="Quantity" 
                                    name="quantity" 
                                    id="quantity"
                                    value= {quantity}
                                    onChange={handleInputChange} 
                                    type="text"/>

                                <div className={`${
                                    quantityError ? "addInventory__error" : "addInventory__valid"}`}>
                                    <img className={`${quantityError ? "addInventory__error--icon" : ""}`}
                                        src={errorIcon}
                                        alt="error"/>
                                    <p className={`${quantityError ? "addInventory__error--text" : ""}`}>
                                        {" "} This field is required{" "}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="addInventory__form">
                                <label className="addInventory__subtitle" htmlFor="warehouse">Warehouse</label>
                                {/* <select className="addInventory__input addInventory__input--warehouse" name="Warehouse" id="Warehouse"> */}
                                    {/* <option value="Manhattan">Please select</option> */}
                                    {/* {warehouses.forEach((warehouse) => {
                                          <option key={warehouse.id}
                                        value={`${warehouse.warehouse_name}`}>{warehouse.warehouse_name}
                                        </option>
                                    })} */}
                                    {/* <option value="Manhattan">{"Manhattan"}</option> */}
                                    
                                {/* </select> */}
                                <Select onChange={handleNameSelecChange} options={warehouseOptions} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="addInventory__buttons">
                        <NavLink to="/" className="addInventory__cancel__btn">
                            <p>Cancel</p>
                        </NavLink>
                        <button className="addInventory__add__btn">
                            <p>+Add Item</p>
                        </button>
                </div>
            </form>
        </section>  
    </main>
    </>
  );
}

export default AddInventoryItem;