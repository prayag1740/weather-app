import React, {useEffect, useState} from 'react'
import '../styles/container.css'
import useFetch from './useFetch'


export default function Container() {

    const [url, setUrl] = useState("");
    const [city, setCity] = useState("tempe") ;

    const {data, loading, error} = useFetch(url);
    console.log(data);
    
    const handleCityChange = (event) => {
        setCity(event.target.value) ;
    }

    const handleSearch = () => {
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);

    }

    const getDateString =  () => {

        const today = new Date() ;
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[today.getDay()];

        const day = today.getDate();
        const month = today.toLocaleString("default", {'month' : 'long'});
        const year = today.getFullYear() ;

        return `${dayName} , ${month} ${day}, ${year}`
    }

  return (
    <div className='main-container'>
        <div className='container'>
            <div className='hori-flex'>
                <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {data && (
                <>
                <h2>{data.name}, {data.sys.country}</h2>
                <h3>{getDateString()}</h3>
                <h1>{data.main.temp}</h1>
                <h2>{data.weather[0].description}</h2>
                <div className='hori-flex'>
                <div className='extra-text'>
                    {data.wind.speed} <br />
                    Wind Speed
                </div>
                <div className='extra-text'>
                    {data.main.humidity} <br />
                    Humdity
                </div>
            </div>
                </>
            )}
        </div>
    </div>
  )
}
