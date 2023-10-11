import { useState } from "react";
import './App.css';

//React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 //Components
import Header from './components/Header/Header';
import CardProduct from './components/CardProduct/CardProduct';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// eslint-disable-next-line
import ListCard from "./components/ListCard/ListCard";


//Pages
import Home from ".//pages/Home";
import Contact from ".//pages/Contact";
import About from ".//pages/About";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
import Category from "./pages/Category";

function App() {
  const [counter, setCounter] = useState(1);


  const handleIncrement = () => {
    setCounter(counter +1)
  };

  const handleDecrement = () => {
    setCounter(counter -1)
  };

  return (  
    <Router>
    <div className="App">
      <Header 
      title="Todo lo que buscás, en un solo lugar"
      />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />  
        <Route path="*" element={<NotFound/>} />  
        <Route path="/detail/:id" element={<DetailPage/>} /> 
        </Routes>
      <div>
      <ItemListContainer />
      <Routes>
        <Route path="/category/:categoryId" element={<Category/>} /> 
      </Routes>
      </div>
      <div className="UserSection">
      <CardProduct 
      name="Sandalias Adidas"
      price="xxxx ARS"
      description= "Talles disponibles del 35 al 42."
      img="https://bboys.pe/cdn/shop/files/GZ3772_1.jpg?v=1684635575"
      />
      <CardProduct 
      name="Casaca NY Knicks"
      price="xxxx ARS"
      description= "Disponible en S, M , L y XL."
      img="https://d3ugyf2ht6aenh.cloudfront.net/stores/646/958/products/cc6ccbd1-6b29-409d-9e5c-30ec653b288f1-8db0b0e7e23ed394a316717524249035-240-0.jpeg"
      />
      <CardProduct
      name="Short Chicago Bulls"
      price="xxxx ARS"
      description= "Medida Ajustable."
      img="https://acdn.mitiendanube.com/stores/001/015/914/products/bermuda-bulls1-ca9387d30a5bad1e0d16131512440095-1024-1024.webp"
      />
    
      </div>
       <div className="CounterSection">
        <p>{counter}</p>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Disminuir</button>
       </div>

    </div>
    </Router> 
  );
}

export default App;
