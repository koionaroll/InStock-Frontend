import React from "react";
import "../EditInventoryItem/EditInventoryItem.scss";
import { NavLink, useNavigate } from "react-router-dom";

import back from '../../assets/Icons/arrow_back-24px.svg';



function EditInventoryItem() {
    const navigate = useNavigate()
  return (
    <>
    <main>
        <section className='editInventory'>     
            <div className='editInventory__header'>                    
                <NavLink onClick={() => { navigate(-1); }} className='editInventory__back__btn'>    
                    <img src={back} alt="back icon" />
                </NavLink>
                <h1 className='editInventory__item'>Edit Inventory Item</h1>
            </div>  
                
            <div className="editInventory__wrapper">    
                <div className="editInventory__section1">    
                    <div className="editInventory__details1">
                        <h1 className="editInventory__title">Item Details</h1>
                        <form className="editInventory__form" action="">
                            <label className="editInventory__subtitle" htmlFor="Item Name">Item Name</label>
                            <input className="editInventory__input" name="Item Name" id="Item Name" type="text" />
                        </form>
                        <form className="editInventory__form" action="">
                            <label className="editInventory__subtitle" htmlFor="Description">Description</label>
                            <textarea className="editInventory__input" name="Description" id="Description" rows="5"></textarea>
                        </form>
                        <form className="editInventory__form" action="">
                            <label className="editInventory__subtitle" htmlFor="Category">Category</label>
                            <select className="editInventory__input editInventory__input--category" name="Category" id="Category">
                                <option value="Electronic">Electronic</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className="editInventory__section2">    
                    <div className="editInventory__details2">
                        <h1 className="editInventory__title">Item Availability</h1>
                        <form className="editInventory__form" action="">
                            <p className="editInventory__subtitle" htmlFor="status">Status</p>
                            <div className="editInventory__status">
                                <div className="editInventory__instock">
                                    <input className="editInventory__input" name="instock" id="instock" value="instock" type="radio"/>
                                    <label htmlFor="instock">In stock</label>
                                </div>    
                                <div className="editInventory__outofstock">    
                                    <input className="editInventory__input" name="instock" id="instock" value="instock" type="radio"/>
                                    <label htmlFor="instock">Out of Stock</label>
                                </div>
                            </div>    
                        </form>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Quantity">Quantity</label>
                            <input className="addInventory__input" name="Quantity" id="Quantity" type="text" />
                        </form>
                        <form className="editInventory__form" action="">
                            <label className="editInventory__subtitle" htmlFor="Warehouse">Warehouse</label>
                            <select className="editInventory__input editInventory__input--warehouse" name="Warehouse" id="Warehouse">
                                <option value="Manhattan">Manhattan</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="editInventory__buttons">
                    <NavLink  onClick={() => { navigate(-1); }}  className="editInventory__cancel__btn">
                        <p>Cancel</p>
                    </NavLink>
                    <NavLink  onClick={() => { navigate(-1); }}  className="editInventory__save__btn">
                        <p>Save</p>
                    </NavLink>
            </div>
        </section>  
    </main>
    </>
  );
}

export default EditInventoryItem;