// import React, { useState } from "react";
import './App.css';

import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import Navbar from "./components/Navbar/Navbar";


function App() {
  // const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <Header 
      title="Todo lo que buscás, en un solo lugar"
      />
      <Navbar /> 
      <div className="UserSection">
      <CardUser 
      name="Sofia Gurlekian"
      date="Se unió en Septiembre del 2023"
      description= "English teacher"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7oM0I-mGR972mWwjfEMEkHiphdP26bAtDH88ppUx8GRbtja3vOYhP9HHphuSfFZ25co&usqp=CAU"
      />
      <CardUser 
      name="Pedro Gurlekian"
      date="Se unió en Septiembre del 2023"
      description= "Businessman"
      img=""
      />
      <CardUser 
      name="Rocio Gurlekian"
      date="Se unió en Septiembre del 2023"
      description= "Employee"
      img=""
      />
    
      </div>
      {/* /* <div className="CounterSection">
        <p>{number}</p>
      </div> */ }
    </div>
  );
}

export default App;
