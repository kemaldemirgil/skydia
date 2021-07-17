import { FC } from 'react'
import { WeatherData } from '../../../types'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import { Label, Grid, Icon } from 'semantic-ui-react'

type Props = {
  data: WeatherData
}
let storedFavCities: any;
let cities: Array<string>;
let cityNames: Array<string> = [];

const favButton = (place:string) => {
  if ((cities !== null && cities.includes(place)) || cityNames.includes(place)) {
    toast({
      type: 'warning',
      icon: 'exclamation triangle',
      title: 'Already have that city',
      description: `Try a different city`,
      animation: 'tada',
      time: 2000
    });
  } else {
    cityNames.push(place)
    localStorage.setItem(`fav-city`, JSON.stringify(cityNames))
    toast({
      type: 'error',
      icon: 'heart',
      title: 'Added to Favourites',
      description: `${place} has been added your favourites!`,
      animation: 'fly down',
      time: 2000
    });
  }
}

const Weather: FC<Props>  = ({data}) => {

  // console.log(data)
  storedFavCities = localStorage.getItem("fav-city");
  cities = JSON.parse(storedFavCities)
  cityNames = [];
  let comment: string;

  if (storedFavCities !== null) {
    for (let i = 0; i < cities.length; i++) {
      cityNames.push(cities[i]);
    }
  }
  
  if (data === null) {
    return (null)
  }

  if (data.main.temp <= 0) {
    comment = "Dont't forget to wear a jacket🧥";
  } else if (data.main.temp > 0 && data.main.temp <= 25) {
    comment = "Enjoy the great weather🏖️"
  } else {
    comment = "Don't forget your sunglasses🕶️"
  }
  // console.log(data)
  return (
    <div className="weather-container">
      <h1 data-aos="fade-up-right"><Icon name='map marker alternate' size='tiny' />{data.name}  
        <span> {data.sys.country}</span>
      </h1>
      <div className="caret-container" data-aos="fade-up" data-aos-duration="6000">
        <Icon name='caret down' className="caret" size='big' />
      </div>
      <div className="fav-button" data-aos="fade-down">
        <button className="ui red big button" onClick={() => favButton(data.name)}><Icon name='heart' size='small' /> Save to Favourites</button>
      </div>
      <div className="current-weather" data-aos="flip-up">
        <div className="ui red fluid card">
          <div className="content">
            <Label as='span' color='red' ribbon>
            <Icon name='map pin' size='small' />
              {data.name}
            </Label>
            <div className="weather-data">
              <Grid stackable textAlign='center'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                  <p data-aos="fade-up-right"><Icon name='circle outline' size='tiny' />Current Temp: {data.main.temp}<sup>&#8451;</sup></p>
                  <p data-aos="fade-left"><Icon name='sun' size='small' />Max Temp: {data.main.temp_max}<sup>&#8451;</sup></p>
                  <p data-aos="fade-up-right"><Icon name='snowflake' size='small' />Min Temp: {data.main.temp_min}<sup>&#8451;</sup></p>
                  <br/>
                  <p className="details" data-aos="fade-up-left">Weather Description: {data.weather[0].description}
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} width="50" height="50" alt="logo"/>
                  </p>
                  </Grid.Column>
                  <Grid.Column>
                  <p data-aos="fade-right"><Icon name='circle outline' size='tiny' />Feels Like: {data.main.feels_like}<sup>&#8451;</sup></p>
                  <p data-aos="fade-up-left"><Icon name='rain' size='small' />Humidity: {data.main.humidity}%</p>
                  <p data-aos="fade-up-right"><Icon name='leaf' size='small' />Wind Speed: {data.wind.speed}m/s</p>
                  <br/>
                  <p className="details" data-aos="fade-up-left">{comment}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
        <div className="toast">
          <SemanticToastContainer position="bottom-right" />
        </div>
      </div>
    </div>
  )
}

export default Weather