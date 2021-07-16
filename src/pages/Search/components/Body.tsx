import { Container, Button, Header, Icon, Modal } from 'semantic-ui-react'
import React, { FC, FormEvent, useState } from 'react'
import { WeatherData } from '../../../types';
import Weather from './Weather'

interface Error {
  cod: string;
  message: string;
}


const Body: FC = () => {
    const [city, setCity] = useState("");
    const [open, setOpen] = useState(false)
    
    const localData: any = localStorage.getItem("searchedWeatherData");
    const localMainData: any = JSON.parse(localData);

    const formChange = (e: FormEvent<HTMLInputElement>) => {
      setCity(e.currentTarget.value);
    }
  
    const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (city.trim() === "") {
        setOpen(true)
      }
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        if (!res.ok) {
          const resData: Error = await res.json();
          console.log(resData);
          setOpen(true)
        }
        const resData: WeatherData = await res.json();
        // console.log(resData);
        localStorage.setItem('searchedWeatherData', JSON.stringify(resData));
      }catch(err) {
        return console.log(err)
      }
      setCity("")
    }
    

  return (
    <>
      <div className="body-container2">
        <Container className="body-wrapper">
          <h1 className="title-desc">Search for a city</h1>
          <form className="ui action huge input search-wrapper" onSubmit={formSubmit}>
            <input 
              type="text" 
              placeholder="Enter a city name"
              value={city}
              onChange={formChange}  
            />
            <button className="ui huge black button">Search</button>
          </form>
          <Weather data={localMainData} />
        </Container>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
        >
          <Header icon className="modal-title">
            <Icon name='exclamation triangle' />
            <span>Incorrect City</span>
          </Header>
          <Modal.Content>
            <p className="modal-desc">Please enter a valid city name</p>
            <Modal.Actions className="modal-button">
              <Button color='green'inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Ok
              </Button>
            </Modal.Actions>
          </Modal.Content>
        </Modal>


      </div>
    </>
  )
}

export default Body