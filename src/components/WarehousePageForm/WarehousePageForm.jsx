
import "../WarehousePageForm/WarehousePageForm.scss";
import { Link, useFetcher, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import errorIcon from "../../assets/Icons/error-24px.svg";

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

    const [textFieldError, setTextFieldError] = useState("--error");

    const [warehouseNameError, setWarehouseNameError] = useState(false);
    const [addressError, setaddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [positionError, setPositionError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [isFormError, setIsFormError] = useState(false)
    // const [[warehouseName1,address1, city1], [setWarehouseName1, setAddress1, setCity1]] = useState(["", "", ""]);


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

        if (warehouseName.length <= 0 ){
            console.log("here1234")
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
        
        // console.log(contactEmail.length)

        // console.log(emailError)
        // if (emailError ) {
        //     console.log('does this run?')
        //     alert("Here7777")
        //     return;
        // }

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
        navigate("/warehouse");
    
    
    }

    const handleSetFormValues = (event) =>  {
        setWarehouseName(event.target.value);
    }


    // useEffect(()=>{
       
    // }, [isFormError, emailError, phoneError , positionError , nameError , countryError , cityError , addressError , WarehouseNameError]);

    // TODO ask how to use use Effect instead?
    // useEffect (() => {
    //     // value === "" ? setaddressError(true) : setaddressError(false);
        
    //     return () => {
    //         console.log(city)
    //         // do something with dependency
    //         city === "" ? setCityError(true) : setCityError(false);
    //     }

    // }, [city]) ;


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
    
    return (
        <>

            <section className="form">
                <form id="form" onSubmit={handleFormSubmit}  className="form__container">

                    <div className="form__details-left">
                        <h3 className="form__title"> Warehouse Details </h3>

                        <div className="form__input-container">
                            <label htmlFor="name" className="form__label"> Warehouse Name </label>
                            {/* (value) => setFormValues((prevFormValues) => ({...prevFormValues, warehouse_name: value})) */}
                            <input name="warehouseName" value={warehouseName} onChange={handleInputChange} id="name" className={`form__input ${warehouseNameError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.name}/>
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
                             onChange={handleInputChange} id="address" className={`form__input ${addressError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.streetAddress}/>
                        
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
                            <input name="contactName" value={contactName} onChange={handleInputChange} id="contact_name" className={`form__input ${nameError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.contact}/>
                        
                            <div className={`${ nameError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ nameError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ nameError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_position" className="form__label"> Position </label>
                            {/* <input name="contactPosition" value={contactPosition} onChange={(event) => {setContactPosition(event.target.value)}} id="contact_position" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.position}/> */}
                            <input name="contactPosition" value={contactPosition} onChange={handleInputChange} id="contact_position" className={`form__input ${positionError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.position}/>
                            <div className={`${ positionError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ positionError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ positionError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_phone" className="form__label"> Phone Number </label>
                            <input name="contactPhone" value={contactPhone} onChange={handleInputChange} id="contact_phone" className={`form__input ${phoneError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.phone}/>
                        
                            <div className={`${ phoneError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ phoneError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ phoneError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_email" className="form__label"> Email </label>
                            {/* <input name="contactEmail" value={contactEmail} onChange={(event) => {setContactEmail(event.target.value)}} id="contact_email" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.email}/> */}
                            <input name="contactEmail" value={contactEmail} onChange={handleInputChange} id="contact_email" className={`form__input ${emailError ? "form__input--error" : ""}`} placeholder={placeHolderInfo.email}/>
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

                    <button form="form" type="submit" to="/warehouse" className="form__add">
                        + Add Warehouse
                    </button>
                </div>
            </section>

        </>
    );
}

export default WarehousePageForm;