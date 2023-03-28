import "./InventoryModal.scss";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import x from "../../assets/Icons/close-24px.svg"

function InventoryModal({openModal, setOpenModal, id, itemName, resetData}) {
  const dialogRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (openModal && !dialogRef.current.open) {
        dialogRef.current.showModal()
    }else {
        dialogRef.current.close()  
    }
  }, [openModal]);

  const deleteInventory = ()=>{
    const apiUrl = "http://localhost:5050";
    
  axios
      .delete(apiUrl + `/inventories/${id}`)
      .then((response) => {
        resetData()
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
            <img className="x-icon" src={x} alt="x-icon" onClick={()=>setOpenModal(false)} />
            <h1 className="modal__title">Delete {itemName} inventory item</h1>
            <p className="modal__text">
              Please confirm that you would like to delete {itemName} from the
              list of Warehouses. You won't be able to undo this action.
            </p>
          </div>
          <div className="modal__button-container">
            <button className="close-button" onClick={()=>setOpenModal(false)} >Cancel</button>
            <button className="delete-button" onClick={()=>deleteInventory()} >Delete</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default InventoryModal;