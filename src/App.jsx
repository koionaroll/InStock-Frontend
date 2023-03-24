import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import InventoryList from "./pages/InventoryList/InventoryList";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/warehouses" element={<WarehouseList />} />
        <Route path="/warehouses/:id" element={WarehouseDetails} />
        {/* <Route path="/warehouses/add" element={<Warehouse />} />  */}
        {/* <Route path="/warehouses/edit/:warehouseId" element={<Warehouse />} /> */}
        <Route path="/inventories" element={<InventoryList />} />
        {/* <Route path="/inventory/:itemId" element={<Inventory />} />
        <Route path="/inventory/add" element={<Inventory />} />
        <Route path="/inventory/edit/:itemId" element={<Inventory />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
