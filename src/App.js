// eslint-disable-next-line
import { useState } from "react";
import './App.css';

//React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 //Components
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


//Pages
import Home from ".//pages/Home";
import Contact from ".//pages/Contact";
import About from ".//pages/About";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
import Category from "./pages/Category";

function App() {
  // const [counter, setCounter] = useState(1);


  // const handleIncrement = () => {
  //   setCounter(counter +1)
  // };

  // const handleDecrement = () => {
  //   setCounter(counter -1)
  // };

  return (  
    <Router>
    <div className="App">
      <Header 
      title="Todo lo que buscás, en un solo lugar"
      />
      <Navbar /> 
      <ItemListContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />   
        <Route path="/category/:categoryId" element={<Category/>} /> 
        <Route path="/detail/:id" element={<DetailPage/>} /> 
        <Route path="*" element={<NotFound/>} /> 
        </Routes>
        

       {/* <div className="CounterSection">
        <p>{counter}</p>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Disminuir</button>
      </div> */}

    </div> 
    </Router> 
  );
  }


export default App;
