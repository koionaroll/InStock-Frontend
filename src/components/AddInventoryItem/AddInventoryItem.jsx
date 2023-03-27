import React from "react";
import "../AddInventoryItem/AddInventoryItem.scss";
import { NavLink, useNavigate} from "react-router-dom";

import back from '../../assets/Icons/arrow_back-24px.svg';

function AddInventoryItem() {
    const navigate = useNavigate();
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
                
            <div className="addInventory__wrapper">    
                <div className="addInventory__section1">    
                    <div className="addInventory__details1">
                        <h1 className="addInventory__title">Item Details</h1>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Item Name">Item Name</label>
                            <input className="addInventory__input" name="Item Name" id="Item Name" type="text" />
                        </form>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Description">Description</label>
                            <textarea className="addInventory__input" name="Description" id="Description" rows="5" placeholder="Please enter a brief item description..."></textarea>
                        </form>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Category">Category</label>
                            <select className="addInventory__input addInventory__input--category" name="Category" id="Category">
                                <option value="">Please select</option>
                                <option value="Electric">Electric</option>

                            </select>
                        </form>
                    </div>
                </div>

                <div className="addInventory__section2">    
                    <div className="addInventory__details2">
                        <h1 className="addInventory__title">Item Availability</h1>
                        <form className="addInventory__form" action="">
                            <p className="addInventory__subtitle" htmlFor="status">Status</p>
                            <div className="addInventory__status">
                                <div className="addInventory__instock">
                                    <input className="addInventory__input" name="instock" id="instock" value="instock" type="radio"/>
                                    <label htmlFor="instock">In stock</label>
                                </div>    
                                <div className="addInventory__outofstock">    
                                    <input className="addInventory__input" name="instock" id="instock" value="instock" type="radio"/>
                                    <label htmlFor="instock">Out of Stock</label>
                                </div>
                            </div>    
                        </form>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Quantity">Quantity</label>
                            <input className="addInventory__input" name="Quantity" id="Quantity" type="text" />
                        </form>
                        <form className="addInventory__form" action="">
                            <label className="addInventory__subtitle" htmlFor="Warehouse">Warehouse</label>
                            <select className="addInventory__input addInventory__input--warehouse" name="Warehouse" id="Warehouse">
                                <option value="Manhattan">Please select</option>
                                <option value="Manhattan">Manhattan</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="addInventory__buttons">
                    <NavLink to="/" className="addInventory__cancel__btn">
                        <p>Cancel</p>
                    </NavLink>
                    <NavLink to="/" className="addInventory__save__btn">
                        <p>+Add Item</p>
                    </NavLink>
            </div>
        </section>  
    </main>
    </>
  );
}

export default AddInventoryItem;