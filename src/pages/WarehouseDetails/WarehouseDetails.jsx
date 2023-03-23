import React from 'react'
import "./WarehouseDetails.scss"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import WarehouseDetailsList from '../../components/WarehouseDetailsList/WarehouseDetailsList'


function WarehouseDetails() {
  return (
    <>
    <Header />
    <div className='WarehouseDetails--layout'>
    <WarehouseDetailsList/>
    </div>
    <Footer />
    </>
  )
}

export default WarehouseDetails