import React from 'react';
import './App.sass';
import Navbar from "./Components/Navbar/Navbar";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calendar />
    </div>
  );
}

export default App;
