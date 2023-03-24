import React from "react";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import { ReactComponent as Edit} from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./ListItem.scss";

function ListItem({element}) {
  return (
    <div className="details--container">
        <div className="details--label--tablet">
          <p className="details--label">INVENTORY ITEM</p>
          <p className="details--info-item">{element.item_name}<img src={chevron} alt="" /></p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">CATEGORY</p>
          <p className="details--info">{element.category}</p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">STATUS</p>
          <p className="details--info">{element.status}</p>
        </div>
        <div className="details--label--tablet">
          <p className="details--label">QUANTITY</p>
          <p className="details--info">{element.quantity} </p>
        </div>
        <div className=" button--container">
          <button className="button--delete">
            <img src={trash} alt="" />
          </button>
          <Edit className="button--edit-1"/>
        </div>
        <Edit className="button--edit-2"/>
      </div>
  );
}


export default ListItem;
