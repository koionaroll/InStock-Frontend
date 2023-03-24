
// This component is the header (left arrow and title) that is 
// the child of the add warehouse and inventory components pages

import { Link } from 'react-router-dom';
import leftArrow from '../../assets/Icons/arrow_back-24px.svg';
import "../AddPageMain/AddPageMain.scss";

const AddPageMain = ({title}) => {
    return (
        <>
            <section className="add-page__main">
                <Link to="/warehouse">
                    <img src={leftArrow} className='add-page__main__back'/>
                </Link>
              
                <h1 className='add-page__main__title'> Add New {title} </h1>
            </section>
        </>
    );

}

export default AddPageMain;