import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
// import WarehouseList from "./pages/WarehouseList/WarehouseList";
// import InventoryList from "./pages/InventoryList/InventoryList";
// import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/.id" element={WarehouseDetails} />
        <Route path="/warehouses/add" element={<Warehouse />} /> */}
        {/* <Route path="/warehouses/edit/:warehouseId" element={<Warehouse />} /> */}
        {/* <Route path="/inventory" element={<Inventory />} />
=======
        {/* Home page is the warehoue page */}
        <Route path="/warehouse" element={<HomePage />} />
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        {/* <Route path="/warehouses" element={<Warehouses />} />
        
        <Route path="/warehouses/edit/:warehouseId" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
>>>>>>> 2e7a826a89d90923aaf2cd51b20b3ec6aa4c6148
        <Route path="/inventory/:itemId" element={<Inventory />} />
        <Route path="/inventory/add" element={<Inventory />} />
        <Route path="/inventory/edit/:itemId" element={<Inventory />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
