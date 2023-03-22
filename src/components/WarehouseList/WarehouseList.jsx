import "./WarehouseList.scss"
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import edit from "../../assets/Icons/edit-24px.svg"


function WarehouseList() {
  return (
<>
<div className="list-header--container">
    <div className="list-header--location-container"> 
    <img className="list-header--back" src= {backArrow} alt="" />
    <h1 className="list-header--location">Washington</h1>
    </div>
    <img className="list-header--edit" src= {edit} alt="" />
</div>
</>
    )
}

export default WarehouseList