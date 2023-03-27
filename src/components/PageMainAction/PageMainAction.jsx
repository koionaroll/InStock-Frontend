
// This component is the header (left arrow and title) that is 
// the child of the add warehouse and inventory components pages

import { Link, useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/Icons/arrow_back-24px.svg';
import "../PageMainAction/PageMainAction.scss";

const PageMainAction = ({title, type}) => {
const navigate = useNavigate();

    let pageTitle = ``;

    if (title === "Warehouse" && type === "Add") {
        pageTitle = `Add new Warehouse`;   
    } else if (title === "Warehouse" && type === "Edit") {
        pageTitle = `Edit Warehouse`;
    } else if (title === "Inventory" && type === "Add") {
        pageTitle = `Add New Inventory Item`
    } else if (title === "Inventory" && type === "Edit") {
        pageTitle = `Edit Inventory Item`;
    } else {
        pageTitle = `Error`;
    }

    return (
        <>
            <section className="add-page__main">
                <Link onClick={() => { navigate(-1); }}>
                    <img src={leftArrow} className='add-page__main__back'/>
                </Link>
              
                <h1 className='add-page__main__title'> {pageTitle} </h1>
            </section>
        </>
    );

}

export default PageMainAction;