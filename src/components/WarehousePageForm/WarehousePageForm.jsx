
import "../WarehousePageForm/WarehousePageForm.scss";
import { Link, useNavigate} from "react-router-dom";
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

    const [textFieldError, setTextFieldError] = useState("");

    const [WarehouseNameError, setWarehouseNameError] = useState(false);
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

    // TODO after warehouse state has been retrieved
    // useEffect(() => {
    //     setTextFieldError("")
    // }, [])



    document.title = 'Add Warehouse';



    const handleError = () => {
       
            console.log('does this run?')
            alert("Here7777")
            
        
    }

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
            // setTextFieldError(`--error`);
            setWarehouseNameError(true);
            // handleError();
            // return;
        }

        if (address.length <= 0 ) {
            // setTextFieldError("--error");
            console.log("here555")
            setaddressError(true)
            // handleError();
            // return;
        }
        if (city.length <= 0) {
            // setTextFieldError("--error");
            setCityError(true);
            // handleError();
            // return;
        }
        if (country.length <=0) {
            // setTextFieldError("--error");
            setCountryError(true);
            // handleError();
            // return;
        }
        if (contactName.length <= 0) {
            // setTextFieldError("--error");
            setNameError(true)
            // handleError();
            // return;
        }
        if (contactPosition.length <= 0) {
            // setTextFieldError("--error");
            setPositionError(true)
            // handleError();
            // return;
        }
        if (contactPhone.length <= 0) {
            // setTextFieldError("--error");
            setPhoneError(true)
            // handleError();
            // return;
        }
        if (contactEmail.length <= 0) {
            console.log('email error should be true')
            // setTextFieldError("--error");
            setEmailError(true);
            // handleError();
            // return;
            // return;
        }

        if (contactEmail === "" || contactPosition === "") {
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

    // useEffect(() => {
    //     console.log(emailError)
    //     if(emailError || phoneError || positionError || nameError || countryError || cityError || addressError || WarehouseNameError){
    //         setIsFormError(true);
    //     }
        
    // }, [isFormError, emailError, phoneError , positionError , nameError , countryError , cityError , addressError , WarehouseNameError])

    // if(isFormError){
    //     alert('form error')
    //     return null;
    // }

    // useEffect(()=>{
       
    // }, [isFormError, emailError, phoneError , positionError , nameError , countryError , cityError , addressError , WarehouseNameError]);


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        if(name === 'address'){
            setAddress(value);
            if(value === ''){
                setaddressError(true)
            } else {
                setaddressError(false)
            }
           
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
                            <input value={warehouseName} onChange={handleSetFormValues} id="name" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.name}/>
                            
                           <div className={`${ WarehouseNameError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ WarehouseNameError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ WarehouseNameError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="address" className="form__label"> Street Address </label>
                            <input 
                            name="address"
                            value={address}
                             onChange={handleInputChange} id="address" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.streetAddress}/>
                        
                            <div className={`${ addressError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ addressError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ addressError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="city" className="form__label"> City </label>
                            <input value={city} onChange={(event => {setCity(event.target.value)})} id="city" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.city}/>
                        
                            <div className={`${ cityError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ cityError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ cityError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="country" className="form__label"> Country </label>
                            <input value={country} onChange={event => {setCountry(event.target.value)}} id="country" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.country}/>
                        
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
                            <input value={contactName} onChange={(event) => {setContactName(event.target.value)}} id="contact_name" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.contact}/>
                        
                            <div className={`${ nameError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ nameError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ nameError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_position" className="form__label"> Position </label>
                            <input value={contactPosition} onChange={(event) => {setContactPosition(event.target.value)}} id="contact_position" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.position}/>
                        
                            <div className={`${ positionError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ positionError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ positionError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>

                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_phone" className="form__label"> Phone Number </label>
                            <input value={contactPhone} onChange={(event) => {setContactPhone(event.target.value)}} id="contact_phone" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.phone}/>
                        
                            <div className={`${ phoneError ? "form__error" : "form__valid"}`}> 
                                <img className={`${ phoneError ? "form__error-icon" : ""}`} src={errorIcon} alt="error"/>
                                <p className={`${ phoneError ? "form__error-text" : ""}`}>  This field is required </p>
                           </div>
                        
                        </div>

                        <div className="form__input-container">
                            <label htmlFor="contact_email" className="form__label"> Email </label>
                            <input value={contactEmail} onChange={(event) => {setContactEmail(event.target.value)}} id="contact_email" className={`form__input form__input${textFieldError}`} placeholder={placeHolderInfo.email}/>
                            
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