import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductAdd from "./pages/ProductAdd";
import ProductStore from "./pages/ProductStore";
import Billing from "./pages/Billing";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/add" element={<ProductAdd/>}/> 
      <Route path="/store" element={<ProductStore/>}/>
      <Route path="/billing" element={<Billing/>}/> 
    </Routes>
  )
}

export default App;
