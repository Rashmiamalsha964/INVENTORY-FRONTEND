import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductAdd from "./pages/ProductAdd";
import ProductStore from "./pages/ProductStore";
import Billing from "./pages/Billing";
import EditProduct from "./pages/EditProduct";
// import TestConnection from "./components/TestConnection";

function App(){
  return(


    // <div>
    //   <h1>Frontend-Backend Test</h1>
    //   <TestConnection />
    // </div>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/add" element={<ProductAdd/>}/> 
      <Route path="/store" element={<ProductStore/>}/>
      <Route path="/billing" element={<Billing/>}/> 
      <Route path="/edit-product" element={<EditProduct />} />
    </Routes>
  )
}

export default App;
