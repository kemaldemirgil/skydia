import React, { FC } from 'react'
import { WeatherData } from '../../../types'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
type Props = {
  data: WeatherData
}
const toaster = (place:string) => {
  toast({
    type: 'info',
    icon: 'heart',
    title: 'Added to Favourites',
    description: `${place} has been added your favourites!`,
    animation: 'bounce',
    time: 2000
  });
}

const Weather: FC<Props>  = ({data}) => {
  let comment: string;
  if (data.main.temp <= 0) {
    comment = "It's getting cold!";
  } else if (data.main.temp >= 0 && data.main.temp <= 25) {
    comment = "Nice weather!"
  } else {
    comment = "Don't forget your sunglasses!"
  }
  console.log(data)
  return (
    <div className="weather-container">
      <h1>{data.name} <span>{data.sys.country}</span></h1>
      <div className="current-weather">
        <p>Current Temp: {data.main.temp}<sup>&#8451;</sup></p>
        <p>Feels Like: {data.main.feels_like}<sup>&#8451;</sup></p>
        <p>Max Temp: {data.main.temp_max}<sup>&#8451;</sup></p>
        <p>Min Temp: {data.main.temp_min}<sup>&#8451;</sup></p>
        <p>Humidity: {data.main.humidity}</p>
        <p>Weather Description: {data.weather[0].description}</p>
        <p>Wind Speed: {data.wind.speed}</p>
        <p>{comment}</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} width="75" height="75" alt="logo"/>
        <button className="ui red button" onClick={() => toaster(data.name)}>Save to Favourites</button>
        <div className="toast">
        <SemanticToastContainer position="bottom-right" />

        </div>
      </div>
    </div>
  )
}

export default Weather
