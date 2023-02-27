import Main from "./components/Main.jsx";
import "./styling/General.css"
import Header from "./components/Header.jsx"
import SideMargin from "./components/SideMargin"
import Highlights from "./components/Highlights"
import { useState } from "react";

function App() {
    
    const [weatherdata, setWeatherData] =  useState(null)
    const [displayLocation, setDisplayLocation] = useState("")
    const [displayPostcode, setDisplayPostcode] = useState("")
    const [displayCelsius, setDisplayCelsius] = useState(true)
    const [searchOn, setSearchOn] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
   

  return (

    <div className="wrapper">

      <div className="grid-sideMargin">
        <SideMargin setWeatherData={setWeatherData} weatherdata={weatherdata} setDisplayPostcode={setDisplayPostcode} setDisplayLocation={setDisplayLocation} displayCelsius={displayCelsius} setDisplayCelsius={setDisplayCelsius} searchOn={searchOn} setSearchOn={setSearchOn} isLoading={isLoading} setIsLoading={setIsLoading}/>
      </div>
      
      <div className="grid-Header">
        <Header weatherdata={weatherdata}displayLocation={displayLocation} displayPostcode={displayPostcode} searchOn={searchOn}/>
      </div>

      <div className="grid-Main">
        <Main weatherdata={weatherdata} displayCelsius={displayCelsius} searchOn={searchOn} isLoading={isLoading}/>
      </div>

      <div className="grid-Highlights">
        <Highlights weatherdata={weatherdata} displayCelsius={displayCelsius} searchOn={searchOn} isLoading={isLoading}/>
      </div>

    </div>  
  );
}

export default App;
