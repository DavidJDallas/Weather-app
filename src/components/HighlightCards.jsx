import "../styling/HighlightCards.css"


const HighlightCards = ({weatherdata, displayCelsius}) => {

    const dailyWeatherData = weatherdata
    const hourlyWeatherData = weatherdata.hourly
    const temp = hourlyWeatherData.temperature_2m
    const apparentTemp = hourlyWeatherData.apparent_temperature
    const cloudCover = hourlyWeatherData.cloudcover
    const rain = hourlyWeatherData.rain  
    const time  = hourlyWeatherData.time
    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth()   
 
   let arrOfWeatherObjects = []
    
   for(let i=0; i<120; i++){
    //Try and calculate average of the days if time 
    if(i%24 ===0){
         arrOfWeatherObjects.push(
           {
            temperature: temp[i],
            apparentTemperature: apparentTemp[i],
            cloudCoverPercentage: cloudCover[i],
            rainInMillimetres: rain[i],
            time: time[i]
            
           }
        )

    }
       
    }


    return(
        <div className="flexParent-Highlightcard">
       {arrOfWeatherObjects.map((card) => {
        return <>
        <div className="flexChild-Highlightcard">

            <h3>{card.time.slice(8, 10) + "." + (card.time.slice(5,7))}</h3>
            

            {/* The code on lines 42-50 is a conditional logic block which tells the programme which weather logo to use, depending on the data that the weather API gives us.*/}
            
            {card.rainInMillimetres > 0 ?   
           <img id="weather-image-highlight"src={ require('../styling/icons/rain.png')} alt="rain"/>  : 
           card.cloudCoverPercentage > 70 ? 
           <img id="weather-image-highlight"src={ require('../styling/icons/cloudy.png')} alt="clouds"/> :
           card.cloudCoverPercentage <70 && card.cloudCoverPercentage > 30 ?
           <img id="weather-image-highlight"src={ require('../styling/icons/cloudy-sun.png')} alt="clouds and sun"/>:
           card.cloudCoverPercentage <= 30 ? 
           <img id="weather-image-highlight"src={ require('../styling/icons/sunny.png')} alt="sun"/> : 
           null}

            {/* The next few lines of code conditionally renders depending on whether or not the user has selected the display to be in degrees celsius or degrees fahrenheit.*/}

            {displayCelsius === true ?
            <>
            <h3 id = "current-temp">{card.temperature}°C </h3>
           <br></br>

           <h4>Feels like: {card.apparentTemperature} °C</h4>
           <br></br>
            </>
            : 
            <>
            <h3 id = "current-temp">{card.temperature}°F </h3>
           <br></br>
           <h4>Feels like: {card.apparentTemperature} °F</h4>
           <br></br>
            </>      
        
        }
           
           <h4>Cloud cover: {card.cloudCoverPercentage}%</h4>
           <br></br>
           <h4>Rain: {card.rainInMillimetres}mm</h4>
          

           
          
          

       </div>
        </>
        
        
        
           
        
       })}
    
    </div>
    )


    }


export default HighlightCards