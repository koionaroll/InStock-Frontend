import React from "react";
import "../InventoryItemDetails/InventoryItemDetails.scss";
import { NavLink } from "react-router-dom";

import back from '../../assets/Icons/arrow_back-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg';



function InventoryItemDetails() {
  return (
    <>
    <main>
        <section className='inventory'>
            <div className="inventory__header">
                <div className='inventory__title'>
                    <NavLink to="/" className='inventory__back__btn'>    
                        <img src={back} alt="back icon" />
                    </NavLink>
                    <h1 className='inventory__item'>Television</h1>
                </div>
                <NavLink to="/" className='inventory__edit__btn'>    
                    <img className="inventory__edit" src={edit} alt="edit icon" />
                    <p className="inventory__edit__btn--text">Edit</p>
                </NavLink>
            </div>  
            
            <div className="inventory__details">
                <div className="inventory__column__1">
                    <div className="inventory__description">
                        <p className="inventory__sub__title">item description:</p>
                        <p className="inventory__content">This TV</p>
                    </div>
                    <div className="inventory__category">
                        <p className="inventory__sub__title">category:</p>
                        <p className="inventory__content">Electronic</p>
                    </div>
                </div>
                <div className="inventory__column__2">    
                    <div className="inventory__status__quantity">
                        <div className="inventory__status">
                            <p className="inventory__sub__title">status:</p>
                            <p className="inventory__content inventory__content--instock">IN STOCK</p>
                        </div>
                        <div className="inventory__quantity">
                            <p className="inventory__sub__title">quantity:</p>
                            <p className="inventory__content">500</p>
                        </div>
                    </div>
                    <div className="inventory__warehouse">
                        <p className="inventory__sub__title">warehouse:</p>
                        <p className="inventory__content">Manhattan</p>
                    </div>
                </div>
            </div>      
        </section>  
    </main>
    </>
  );
}

export default InventoryItemDetails;