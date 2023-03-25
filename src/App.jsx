
import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import WarehouseList from "./pages/WarehouseList/WarehouseList"
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';
import EditInventoryItem from './components/EditInventoryItem/EditInventoryItem';
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem'



// console.log("hello")

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<WarehouseList/>}/>
      <Route path="/:warehouseId" element={<WarehouseDetails/>}/>
      <Route path="/inventory/:itemId" element={<InventoryItemDetails/>}/>
      <Route path="/warehouse/add/" element={<AddInventoryItem/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
