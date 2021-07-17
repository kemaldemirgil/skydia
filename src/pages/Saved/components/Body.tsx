import { useState } from 'react'
import { WeatherData } from '../../../types';
import { Dropdown, DropdownItemProps, Button, Icon, Card, Image } from 'semantic-ui-react'

let weatherTemplate = {
  name: "",
  sys: {
    country: ""
  },
  main: {
    temp: "",
    temp_max: "",
    temp_min: "",
    feels_like: "",
    humidity: "",
  },
  wind: {
    speed: ""
  }
};
let displayCard = false;

let tempComment: string = "";
let tempImg: string = "";
const Body = () => {
  const [citiesData, setCitiesData] = useState(weatherTemplate)
  const favouriteCities: DropdownItemProps[] | { text: string; value: string; key: string; }[] | undefined = [];
  let storedFavCities: any = localStorage.getItem("fav-city");
  let cities: Array<string> = JSON.parse(storedFavCities)

  if (cities !== null) {
    cities.forEach(element => {
      let cityObj = {
        text: element,
        value: element,
        key: element
      }
      favouriteCities.push(cityObj)
    });
  }

  const getWeather = async (e:any, {value}: any) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
    if (!res.ok) {
      console.log(res);
    } else {
      displayCard = true;
      const resData: WeatherData = await res.json();
      const data: any = resData
      if (data.main.feels_like < -10 ) {
        tempComment = "It's freezing grab a hot chocolate!"
        tempImg = "https://c4.wallpaperflare.com/wallpaper/364/79/684/snow-8k-tree-forest-wallpaper-preview.jpg"
      } else if (data.main.feels_like >= -10 && data.main.feels_like <= 5) {
        tempComment = "It's pretty cold out there, don't forget your jacket!"
        tempImg = "https://c4.wallpaperflare.com/wallpaper/350/698/382/nature-landscapes-trees-forests-autumn-fall-seasons-winter-snow-frost-shore-lakes-grass-leaves-cold-high-resolution-images-wallpaper-preview.jpg"
      } else if (data.main.feels_like > 5 && data.main.feels_like < 20) {
        tempComment = "It's slightly chilly out there!"
        tempImg = "https://hdfreewallpaper.net/wp-content/uploads/2015/08/nice-summer-season-hd-wallpapers-free.jpg"
      } else if (data.main.feels_like >= 20 && data.main.feels_like <= 30) {
        tempComment = "Enjoy the great weather!"
        tempImg = "https://p4.wallpaperbetter.com/wallpaper/1021/17/157/summer-scenery-wallpaper-preview.jpg"
      } else {
        tempComment = "It's pretty hot, don't forget your sunglasses!"
        tempImg = "https://www.teahub.io/photos/full/288-2884225_temperature-hot-weather.jpg"
      }
      setCitiesData(data)
    }
  }

  const deleteCity = () => {
    alert(`${citiesData.name} has been removed from favourites!`)
    cities = cities.filter(e => e !== `${citiesData.name}`);
    // console.log(cities)
    favouriteCities.length = 0
    cities.forEach(element => {
      let cityObj = {
        text: element,
        value: element,
        key: element
      }
      favouriteCities.push(cityObj)
    });
    // console.log(`${cities}`)
    localStorage.setItem(`fav-city`, JSON.stringify(cities))
    if (cities.length === 0) {
      displayCard = false
    } 
  }

  return (
    <div className="fav-wrapper">
      <div>
        <h1 data-aos="zoom-in-up"><Icon name='heart' size='small'/>Favourite Cities<Icon name='heart' size='small'/></h1>
        <div className="city-select-container" data-aos="zoom-out-down">
          <Dropdown
            placeholder='Select a city'
            fluid
            search
            selection
            value
            options={favouriteCities}
            onChange={getWeather}
            className="city-select"
          />
        </div>
        {
          (displayCard && citiesData.name !== "")
          ?
          <div className="fav-wrapper">
            <div className="fav-weather-data" data-aos="flip-down">
              <Card fluid>
                <Image src={tempImg} wrapped ui={false} data-aos="zoom-in" />
                <Card.Content>
                  <Card.Header className="fav-city-title" data-aos="fade-down-right"><Icon name='map marker alternate' size='small' />{citiesData.name} {citiesData.sys.country}</Card.Header>
                  <Card.Meta>
                    <span className='date' data-aos="fade-up-left">{tempComment}</span>
                  </Card.Meta>
                  <Card.Description>
                    <p data-aos="fade-up-right"><Icon name='circle outline' size='tiny' />Current Temp: {citiesData.main.temp}<sup>&#8451;</sup></p>
                    <p data-aos="fade-down-left"><Icon name='sun' size='small' />Max Temp: {citiesData.main.temp_max}<sup>&#8451;</sup></p>
                    <p data-aos="fade-up-right"><Icon name='snowflake' size='small' />Min Temp: {citiesData.main.temp_min}<sup>&#8451;</sup></p>
                    <p data-aos="fade-down-left"><Icon name='circle outline' size='tiny' />Feels Like: {citiesData.main.feels_like}<sup>&#8451;</sup></p>
                    <p data-aos="fade-down-right"><Icon name='rain' size='small' />Humidity: {citiesData.main.humidity}%</p>
                    <p data-aos="fade-up-left"><Icon name='leaf' size='small' />Wind Speed: {citiesData.wind.speed}m/s</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button fluid color="red" icon onClick={deleteCity} data-aos="fade-down-right">
                  <Icon name='trash' />
                  Delete City
                </Button>
                </Card.Content>
              </Card>
              <small data-aos="zoom-in"><a href={`https://www.accuweather.com/en/search-locations?query=${citiesData.name}`} target="_blank" rel="noreferrer">Click for more information</a></small>
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Body
