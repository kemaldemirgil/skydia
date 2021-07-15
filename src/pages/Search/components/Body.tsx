import { Container } from 'semantic-ui-react'
import React, { FC, FormEvent, useState } from 'react'
import { WeatherData } from '../../../types';
import Weather from './Weather'

interface Error {
  cod: string;
  message: string;
}


const Body: FC = () => {
    const [city, setCity] = useState("");
    const localData: any = localStorage.getItem("searchedWeatherData");
    const localMainData: any = JSON.parse(localData);

    const formChange = (e: FormEvent<HTMLInputElement>) => {
      setCity(e.currentTarget.value);
    }
  
    const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (city.trim() === "") {
        return alert("Please enter a city");
      }
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        if (!res.ok) {
          const resData: Error = await res.json();
          console.log(resData);
        }
        const resData: WeatherData = await res.json();
        console.log(resData);
        localStorage.setItem('searchedWeatherData', JSON.stringify(resData));
      }catch(err) {
        return err
      }
      setCity("")
    }

  return (
    <>
      <div className="body-container2">
        <Container className="body-wrapper">
          <h1>Search for a city</h1>
          <form className="ui action input search-wrapper" onSubmit={formSubmit}>
            <input 
              type="text" 
              placeholder="Search..."
              value={city}
              onChange={formChange}  
            />
            <button className="ui button">Search</button>
          </form>
          <Weather data={localMainData} />
        </Container>
      </div>
    </>
  )
}

export default Body