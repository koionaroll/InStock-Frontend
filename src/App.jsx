import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home page is the warehoue page */}
        <Route path="/warehouse" element={<HomePage />} />
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        {/* <Route path="/warehouses" element={<Warehouses />} />
        
        <Route path="/warehouses/edit/:warehouseId" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:itemId" element={<Inventory />} />
        <Route path="/inventory/add" element={<Inventory />} />
        <Route path="/inventory/edit/:itemId" element={<Inventory />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
