import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Head from "./components/home/header";
import Footer from "./components/home/footer";
import RouterList from "./RouterLists";
function App() {
  return (
  <>
   <BrowserRouter> 
 
  
  <Head/> 
 <RouterList/> 
 <Footer/> 
   

   </BrowserRouter>
  
  </>
  );
}

export default App;
