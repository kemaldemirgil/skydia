import React, { FC } from 'react'
import { WeatherData } from '../../../types'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import { Label, Grid, Icon } from 'semantic-ui-react'


type Props = {
  data: WeatherData
}

const toaster = (place:string) => {
  toast({
    type: 'error',
    icon: 'heart',
    title: 'Added to Favourites',
    description: `${place} has been added your favourites!`,
    animation: 'bounce',
    time: 2000
  });
}

const Weather: FC<Props>  = ({data}) => {
  let comment: string;
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
  console.log(data)
  return (
    <div className="weather-container">
      <h1><Icon name='map marker alternate' size='tiny' />{data.name}  
        <span> {data.sys.country} 
        </span>
      </h1>
      <div className="fav-button">
        <button className="ui red big button" onClick={() => toaster(data.name)}><Icon name='heart' size='small' /> Save to Favourites</button>
      </div>
      <div className="current-weather">
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
                  <p><Icon name='circle outline' size='tiny' />Current Temp: {data.main.temp}<sup>&#8451;</sup></p>
                  <p><Icon name='sun' size='small' />Max Temp: {data.main.temp_max}<sup>&#8451;</sup></p>
                  <p><Icon name='snowflake' size='small' />Min Temp: {data.main.temp_min}<sup>&#8451;</sup></p>
                  <br/>
                  <p className="details">Weather Description: {data.weather[0].description}
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} width="50" height="50" alt="logo"/>
                  </p>
                  </Grid.Column>
                  <Grid.Column>
                  <p><Icon name='circle outline' size='tiny' />Feels Like: {data.main.feels_like}<sup>&#8451;</sup></p>
                  <p><Icon name='rain' size='small' />Humidity: {data.main.humidity}%</p>
                  <p><Icon name='leaf' size='small' />Wind Speed: {data.wind.speed}m/s</p>
                  <br/>
                  <p className="details">{comment}</p>
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
