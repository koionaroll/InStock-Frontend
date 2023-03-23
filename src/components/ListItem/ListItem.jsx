import React from 'react'
import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./ListItem.scss"

function ListItem() {
  return (
    <>
      <div className="details--container">
        <div>
          <p className="details--label">INVENTORY ITEM</p>
          <p className="details--info">
            Televisions
            {
              //prop.address
            }
          </p>
        </div>
        <div>
          <p className="details--label">STATUS</p>
          <p className="details--info">
            INSTOCK
            {
              //prop.address
            }
          </p>
        </div>
        <div>
          <p className="details--label">CATEGORY</p>
          <p className="details--info">
            Electronics{" "}
            {
              //prop.name
            }
          </p>
        </div>
        <div>
          <p className="details--label">QUANTITY</p>
          <p className="details--info">
            500
            {
              //prop.email
            }
          </p>
        </div>
        <button className='delete'><img src={trash} alt="" /></button>
        <button className='edit'><img src={edit} alt="" /></button>
        </div>
    </>
  )
}

export default ListItem