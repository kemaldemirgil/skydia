import React, { useState} from 'react'
// import FavCityItem from './FavCityItem';
// import { WeatherData } from '../../../types';


// type Props = {
//   city: WeatherData
// }


const Body = () => {
  let storedFavCities: any = localStorage.getItem("fav-city");
  let cities: Array<string> = JSON.parse(storedFavCities)
  const [citiesWeather, setCitiesWeather] = useState([{}])


  console.log(cities)
  
  
  cities.forEach((city: string) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(apiURL).then(res => res.json)
    .then( (cityData: any) => {
      setCitiesWeather([...citiesWeather, cityData])
      console.log(citiesWeather)
    })
  })






  return (
    <div className="body-container">
      {
      citiesWeather.map((city: {})=> (
        <h1>meow</h1>
      ))
      }
    </div>
  )
}

export default Body






// cities.forEach((city: any) => {
//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
//   fetch(apiURL).then(res => res.json())
//   .then(data => {
//     setCityData(data)
//     console.log("--------->" + cityData)
//   })
//   .catch(err => console.log(err))
//   // const resData: WeatherData = res.json();
// });




//   try {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

//     if(!res.ok) {
//       console.log(res)
//     }

//     const resData: WeatherData = await res.json();
//   }catch(err) {
//     console.log(err)
//   }
// }
// return (
//   <div className="body-container">
//     {
//       cities.map((x: any, index: React.Key) => (
//         <FavCityItem key={index} item={x} />
//       ))
//     }
//   </div>
// )

