import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      {/* <Route path="/warehouses" element={<Warehouses />} /> */}
      {/* <Route path="/warehouses/add" element={<Warehouse />} /> */}
      <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
      {/* <Route path="/warehouses/edit/:warehouseId" element={<Warehouse />} /> */}
      {/* <Route path="/inventory" element={<Inventory />} /> */}
      <Route path="/inventory/:itemId" element={<InventoryItemDetails />} />
      {/* <Route path="/inventory/add" element={<Inventory />} /> */}
      {/* <Route path="/inventory/edit/:itemId" element={<Inventory />} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
