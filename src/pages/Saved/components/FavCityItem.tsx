import React from 'react'

const FavCityItem = () => {
  return (
    <div>
      
    </div>
  )
}

export default FavCityItem



// import {FC} from 'react'
// import { WeatherData } from '../../../types';

// interface CityDataProps {
//   item: any
// }

// const FavCityItem: FC<CityDataProps>= ({item}) => {

//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
//   let cityData: WeatherData = {} as WeatherData;
//   fetch(apiURL).then(response => response.json())
//     .then(data => {
//       cityData = data;
//       console.log(cityData)
//     })
//     .catch(err => console.log(err));
//   return (
//     <div>
//       <p>{item}</p>
//       <p>Here is my name: {cityData.name}</p>
//       <p>Here is my visibility:{cityData.visibility}</p>
//     </div>
//   )

// }

// export default FavCityItem