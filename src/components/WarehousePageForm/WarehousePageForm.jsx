
import "../WarehousePageForm/WarehousePageForm.scss";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import errorIcon from "../../assets/Icons/error-24px.svg";
import EditWarehouse from "../../pages/EditWarehouse/EditWarehouse";

const WarehousePageForm = ({formType, placeHolderInfo}) => {

    const {warehouseId} = useParams();
    const navigate = useNavigate();
    console.log("Type is: ", placeHolderInfo, formType)

    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState(formType === "Edit" ? placeHolderInfo.address : "");
    const [city, setCity] = useState(formType === "Edit"? placeHolderInfo.city : "");
    const [country, setCountry] = useState(formType === "Edit" ? placeHolderInfo.country : "");
    const [contactName, setContactName] = useState(formType === "Edit" ? placeHolderInfo.contact_name : "");
    const [contactPosition, setContactPosition] = useState(formType === "Edit" ? placeHolderInfo.contact_position : "");
    const [contactPhone, setContactPhone] = useState(formType === "Edit" ? placeHolderInfo.contact_phone : "");
    const [contactEmail, setContactEmail] = useState("");

    // useEffect(() => {
    //     setWarehouseName(placeHolderInfo.warehouse_name);
    //     console.log("wew aer here hnow ", warehouseName)

    // }, [])
    // useEffect(() => {
    //     getWarehouse(warehouseId);
    // }, [])

    const getWarehouse = () => {
        console.log("here")
        const url = `http://localhost:5050/warehouses/${warehouseId}`;
        axios
        .get(url)
        .then(response => {
            // console.log("here")
            console.log(response.data.address);
            // setWarehouse(response.data);
            setWarehouseName(response.data.warehouse_name)
            setAddress(response.data.address)
            setContactPhone(response.data.contact_phone)
            setCity(response.data.city)
            setCountry(response.data.country)
            setContactEmail(response.data.contact_email)
            setContactName(response.data.contact_name)
            setContactPosition(response.data.contact_position)
            // return response.data;
            console.log("my name ", warehouseName)
        })
        .catch(err => {
            console.log(`Could not find a warehouse ${err}`);
        })
    }

    // setWarehouseName(placeHolderInfo.warehouse_name);
    console.log(formType === "Edit" ? placeHolderInfo.contact_email : "")
    // const [textFieldError, setTextFieldError] = useState("--error");

    const [warehouseNameError, setWarehouseNameError] = useState(false);
    const [addressError, setaddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [positionError, setPositionError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    
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

    const editWarehouse = () => {
        console.log("edit form")
    }

    useEffect(() => {
        console.log("here123")
        if (warehouseId && formType === "Edit") {
            getWarehouse(warehouseId);
        }
        // console.log(warehouse.warehouse_name)
        // console.log(warehouse)
        // setPlaceHolderInfo(warehouse)
        document.title = 'Edit Warehouse';
    }, []);


    const handleFormSubmit = (event) => {
        // const {name, className, value} = event.target;
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

        console.log("here1234", warehouse.warehouse_name)
        if (warehouseName.length <= 0 ){
            
            setWarehouseNameError(true);
        }

        if (address.length <= 0 ) {
            console.log("here555")
            setaddressError(true)
        }
        if (city.length <= 0) {
            setCityError(true);
        }

        // handleInputChange(event)

        if (country.length <=0) {
            setCountryError(true);

        }
        if (contactName.length <= 0) {
            setNameError(true)
        }
        if (contactPosition.length <= 0) {
            setPositionError(true)
        }
        if (contactPhone.length <= 0) {
            setPhoneError(true)
        }
        if (contactEmail.length <= 0) {
            console.log('email error should be true')
            setEmailError(true);
        }

        if (contactEmail === "" || warehouseName === "" || contactPosition === "" || contactName === ""
            || contactPhone === "" || city === "" || country === "" || address === "") {

            return;
        }

        // setContactName("");
        // setCity("");
        // setAddress("");
        // setCountry("");
        // setContactEmail("");
        // setContactPhone("");
        // setContactPosition("");
        // setWarehouseName("");

        if (formType === "Add") {
            addWarehouse(warehouse);
        }
        if (formType === "Edit") {
            editWarehouse()
        }


        alert("form submitted");
        navigate("/warehouse");
    
    
    }

    // TODO ask how to use use Effect instead?
    // TODO ask why we can't pass axios results as props and initialize state to them

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        if(name === 'address'){
            setAddress(value);
            value === "" ? setaddressError(true) : setaddressError(false);    
        }
        if (name === "city") {
            setCity(value)
            value === "" ? setCityError(true) : setCityError(false);

        }
        if (name === "country") {
            setCountry(value)
            value === "" ? setCountryError(true) : setCountryError(false);
        }
        if (name === "contactName") {
            setContactName(value)
            value === "" ? setNameError(true) : setNameError(false);
        }
        if (name === "contactPosition") {
            setContactPosition(value)
            value === "" ? setPositionError(true) : setPositionError(false);
        }
        if (name === "warehouseName") {
            setWarehouseName(value);
            value === "" ? setWarehouseNameError(true) : setWarehouseNameError(false);
        }
        if (name === "contactPhone") {
            setContactPhone(value);
            value === "" ? setPhoneError(true) : setPhoneError(false);
        }
        if (name === "contactEmail") {
            setContactEmail (value);
            value === "" ? setEmailError(true) : setEmailError(false);
        }
    }
    console.log(warehouseName);
    console.log("Warehouse name ", warehouseName)
    return (
    
        <>

            <section className="form">
                <form id="form" onSubmit={handleFormSubmit}  className="form__container">

                    <div className="form__details-left">
                        <h3 className="form__title"> Warehouse Details </h3>

                        <div className="form__input-container">
                            <label htmlFor="name" className="form__label"> Warehouse Name </label>
                            {/* (value) => setFormValues((prevFormValues) => ({...prevFormValues, warehouse_name: value})) */}
                            <input name="warehouseName" value={warehouseName} onChange={handleInputChange} id="name" className={`form__input ${warehouseNameError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.warehouse_name}/>
                            {/* `form__input form__input${textFieldError}` */}
                           <div className={`${ warehouseNameError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ warehouseNameError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ warehouseNameError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="address" className="form__label"> Street Address </label>
                            <input 
                            name="address"
                            value={address}
                             onChange={handleInputChange} id="address" className={`form__input ${addressError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.address}/>
                        
                            <div className={`${ addressError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ addressError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ addressError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="city" className="form__label"> City </label>
                            <input name="city" value={city} onChange={handleInputChange} id="city" className={`form__input ${cityError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.city}/>
                        
                            <div className={`${ cityError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ cityError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ cityError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="country" className="form__label"> Country </label>
                            <input name="country" value={country} onChange={handleInputChange} id="country" className={`form__input ${countryError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.country}/>
                        
                            <div className={`${ countryError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ countryError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ countryError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                    </div>

                    <div className="form__details-right">
                        <h3 className="form__title"> Contact Details </h3>

                        <div className="form__input-container">
                            <label htmlFor="contact_name" className="form__label"> Contact Name </label>
                            <input name="contactName" value={contactName} onChange={handleInputChange} id="contact_name" className={`form__input ${nameError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.contact_name}/>
                        
                            <div className={`${ nameError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ nameError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ nameError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_position" className="form__label"> Position </label>
                            {/* <input name="contactPosition" value={contactPosition} onChange={(event) => {setContactPosition(event.target.value)}} id="contact_position" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.position}/> */}
                            <input name="contactPosition" value={contactPosition} onChange={handleInputChange} id="contact_position" className={`form__input ${positionError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.contact_position}/>
                            <div className={`${ positionError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ positionError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ positionError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_phone" className="form__label"> Phone Number </label>
                            <input name="contactPhone" value={contactPhone} onChange={handleInputChange} id="contact_phone" className={`form__input ${phoneError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.contact_phone}/>
                        
                            <div className={`${ phoneError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ phoneError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ phoneError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_email" className="form__label"> Email </label>
                            {/* <input name="contactEmail" value={contactEmail} onChange={(event) => {setContactEmail(event.target.value)}} id="contact_email" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.email}/> */}
                            <input name="contactEmail" value={contactEmail} onChange={handleInputChange} id="contact_email" className={`form__input ${emailError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.contact_email}/>
                            <div className={`${ emailError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ emailError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ emailError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>
                    </div>

                </form>

                <div className="form__buttons">
                    <Link to="/" className="form__cancel">
                        Cancel
                    </Link>

                    <button form="form" type="submit" to="/warehouse" className={`${formType === "Edit" ? "form__edit" : "form__add"}`}>
                        {`${formType === "Edit" ? "Save" : " + Add Warehouse"}`}
                    </button>
                </div>
            </section>

        </>
    );
}

export default WarehousePageForm;