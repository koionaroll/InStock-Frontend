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
  //Global variable to store the API URL
  const apiUrl = "http://localhost:5050";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehouseList apiUrl={apiUrl} />} />
        <Route
          path="/warehouse/edit/:warehouseId"
          element={<EditWarehouse apiUrl={apiUrl} />}
        />
        <Route
          path="/inventories"
          element={<InventoryList apiUrl={apiUrl} />}
        />
        <Route
          path="/:warehouseId"
          element={<WarehouseDetails apiUrl={apiUrl} />}
        />
        <Route
          path="/inventory/:itemId"
          element={<InventoryItemDetails apiUrl={apiUrl} />}
        />
        <Route
          path="/inventory/add/"
          element={<AddInventoryItem apiUrl={apiUrl} />}
        />
        <Route
          path="/warehouse/add/"
          element={<AddWarehouse apiUrl={apiUrl} />}
        />
        <Route
          path="/inventory/edit/"
          element={<EditInventoryItem apiUrl={apiUrl} />}
        />
        <Route
          path="/inventory/edit/:itemId"
          element={<EditInventoryItem apiUrl={apiUrl} />}
        />
        <Route
          path="/warehouse/edit/"
          element={<EditWarehouse apiUrl={apiUrl} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
