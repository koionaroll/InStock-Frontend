import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import InventoryList from "./pages/InventoryList/InventoryList";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/edit/:warehouseId" element={<EditWarehouse/>}/>
        <Route path="/inventories" element={<InventoryList />} />
        <Route path="/:warehouseId" element={<WarehouseDetails />} />
        <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
        <Route path="/inventory/add/" element={<AddInventoryItem />} />
        <Route path="/warehouse/add/" element={<AddWarehouse />} />
        <Route path="/inventory/edit/" element={<EditInventoryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
