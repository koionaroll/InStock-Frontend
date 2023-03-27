import "./WarehouseModal.scss";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import x from "../../assets/Icons/close-24px.svg"

function WarehouseModal({openModal, setOpenModal, id, getWarehouses}) {
  const dialogRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (openModal && !dialogRef.current.open) {
        dialogRef.current.showModal()
    }else {
        dialogRef.current.close()  
    }
  }, [openModal]);

  const deleteWarehouse = ()=>{
    console.log("delete clicked")
    const apiUrl = "http://localhost:5050";
    
  axios
      .delete(apiUrl + `/warehouses/${id}/inventories`)
      .then((response) => {
        getWarehouses();
        setOpenModal(false)


      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>

      <dialog ref={dialogRef} className="modal" id="modal">
        <div className="modal__wrapper">
          <div className="modal__message-container">
            <img className="x-icon" src={x} alt="x-icon" />
            <h1 className="modal__title">Delete Washington Warehouse</h1>
            <p className="modal__text">
              Please confirm that you would like to delete prop . name from the
              list of Warehouses. You won't be able to undo this action.
            </p>
          </div>
          <div className="modal__button-container">
            <button className="close-button" onClick={()=>setOpenModal(false)} >Cancel</button>
            <button className="delete-button" onClick={()=>deleteWarehouse()} >Delete</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default WarehouseModal;
