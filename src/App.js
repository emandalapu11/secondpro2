import React from "react";
import Middle from "./components/Middle";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(){
 
 
  return(
    <div>
       <Navbar/>
      <Middle/>
      <Hero/>
      <Newsletter/>
      <Card/>
      <Footer/>
      </div>
  );
}

export default App;
