// import React, { useState } from "react";
import './App.css';

import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import Navbar from "./components/Navbar/Navbar";
import itemListContainer from './components/itemListContainer/itemListContainer';
console.log(itemListContainer);

function App() {
  // const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <Header 
      title="Todo lo que buscás, en un solo lugar"
      />
      <Navbar /> 
      <div>
      <itemListContainer />
      </div>
      <div className="UserSection">
      <CardUser 
      name="Sandalias Adidas"
      price="xxxx ARS"
      description= "Talles disponibles del 35 al 42."
      img="https://bboys.pe/cdn/shop/files/GZ3772_1.jpg?v=1684635575"
      />
      <CardUser 
      name="Casaca NY Knicks"
      price="xxxx ARS"
      description= "Disponible en S, M , L y XL."
      img="https://d3ugyf2ht6aenh.cloudfront.net/stores/646/958/products/cc6ccbd1-6b29-409d-9e5c-30ec653b288f1-8db0b0e7e23ed394a316717524249035-240-0.jpeg"
      />
      <CardUser 
      name="Riñonera Nike"
      price="xxxx ARS"
      description= "Medida Ajustable. Colores disponibles: Negro, y Blanco."
      img="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/357/588/products/diseno-sin-titulo-2022-10-12t134601-4911-f89270621d89457a1816655933977424-1024-1024.png"
      />
    
      </div>
      {/* /* <div className="CounterSection">
        <p>{number}</p>
      </div> */ }
    </div>
  );
}

export default App;
