
import "../WarehousePageForm/WarehousePageForm.scss";
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const WarehousePageForm = ({placeHolderInfo}) => {

    const navigate = useNavigate();

    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactPosition, setContactPosition] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    // const obj = 
    // { "warehouse_name": "Chicago",
    // "address": "3218 Guess Rd",
    // "city": "Chicago",
    // "country": "USA",
    // "contact_name": "Jameson Schuppe",
    // "contact_position": "Warehouse Manager",
    // "contact_phone": "+1 (919) 797-2875",
    // "contact_email": "jschuppe@instock.com"}

    // const newObj = {...obj, "contact_name": "asdasdsada"}

    const addWarehouse = (newWarehouse) => {
        const url = `http://localhost:5050/warehouses`;
        axios
        .post(url, newWarehouse)
        .then(response => {

        })
        .catch(err => {
            console.log("could not post a new warehouse ", err);
        })
    }

    document.title = 'Add Warehouse';

    const handleFormSubmit = (event) => {

        event.preventDefault();

        const warehouse = { 
            warehouse_name: warehouseName,
            address: address,
            city: city,
            country: country,
            contact_name: contactName,
            contact_position: contactPosition,
            contact_phone: contactPhone,
            contact_email: contactEmail
        }
        
        setContactName("");
        setCity("");
        setAddress("");
        setCountry("");
        setContactEmail("");
        setContactPhone("");
        setContactPosition("");
        setWarehouseName("");

        addWarehouse(warehouse);

        alert("form submitted");
        navigate("/warehouse")
    }

    const handleSetFormValues = (event) =>  {
        setWarehouseName(event.target.value);
    }



    return (
        <>

            <section className="form">
                <form id="form" onSubmit={handleFormSubmit}  className="form__container">

                    <div className="form__details-left">
                        <h3 className="form__title"> Warehouse Details </h3>

                        <div className="form__input-container">
                            <label htmlFor="name" className="form__label"> Warehouse Name </label>
                            {/* (value) => setFormValues((prevFormValues) => ({...prevFormValues, warehouse_name: value})) */}
                            <input value={warehouseName} onChange={handleSetFormValues} id="name" className="form__input" placeholder={placeHolderInfo.name}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_position" className="form__label"> Street Address </label>
                            <input value={address} onChange={(event) => {setAddress(event.target.value)}} id="contact_position" className="form__input" placeholder={placeHolderInfo.streetAddress}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="city" className="form__label"> City </label>
                            <input value={city} onChange={(event => {setCity(event.target.value)})} id="city" className="form__input" placeholder={placeHolderInfo.city}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="country" className="form__label"> Country </label>
                            <input value={country} onChange={event => {setCountry(event.target.value)}} id="country" className="form__input" placeholder={placeHolderInfo.country}/>
                        </div>

                    </div>

                    <div className="form__details-right">
                        <h3 className="form__title"> Contact Details </h3>

                        <div className="form__input-container">
                            <label htmlFor="contact_name" className="form__label"> Contact Name </label>
                            <input value={contactName} onChange={(event) => {setContactName(event.target.value)}} id="contact_name" className="form__input" placeholder={placeHolderInfo.contact}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_position" className="form__label"> Position </label>
                            <input value={contactPosition} onChange={(event) => {setContactPosition(event.target.value)}} id="contact_position" className="form__input" placeholder={placeHolderInfo.position}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_phone" className="form__label"> Phone Number </label>
                            <input value={contactPhone} onChange={(event) => {setContactPhone(event.target.value)}} id="contact_phone" className="form__input" placeholder={placeHolderInfo.phone}/>
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_email" className="form__label"> Email </label>
                            <input value={contactEmail} onChange={(event) => {setContactEmail(event.target.value)}} id="contact_email" className="form__input" placeholder={placeHolderInfo.email}/>
                        </div>
                    </div>

                </form>

                <div className="form__buttons">
                    <Link to="/" className="form__cancel">
                        Cancel
                    </Link>

                    <button form="form" type="submit" to="/warehouse" className="form__add">
                        + Add Warehouse
                    </button>
                </div>
            </section>

        </>
    );
}

export default WarehousePageForm;