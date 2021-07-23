// imports.........................
import { Container, Button, Header, Icon, Modal } from "semantic-ui-react";
import { FC, FormEvent, useState } from "react";
import { WeatherData } from "../../../types";
import Weather from "./Weather";

// Error response types
interface Error {
  cod: string;
  message: string;
}

const Body: FC = () => {
  // City input state
  const [city, setCity] = useState("");
  // Modal state
  const [open, setOpen] = useState(false);
  // Get weather data from local storage
  const localData: any = localStorage.getItem("searchedWeatherData");
  const localMainData: any = JSON.parse(localData);
  // On form input change, set state accordingly
  const formChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  // Submit form
  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // If input is empty display modal
    if (city.trim() === "") {
      setOpen(true);
    }
    try {
      // Fetch weather data
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      // If response error, display modal
      if (!res.ok) {
        const resData: Error = await res.json();
        console.log(resData.message);
        setOpen(true);
      }
      const resData: WeatherData = await res.json();
      // Set weather data to local storage
      localStorage.setItem("searchedWeatherData", JSON.stringify(resData));
    } catch (err) {
      return err;
    }
    // Set input to empty
    setCity("");
  };
  return (
    <>
      <div className="search-body-container">
        <Container className="body-wrapper">
          <h1 className="title-desc" data-aos="zoom-in-down">
            Search for a city
          </h1>
          <form
            className="ui action huge input search-wrapper"
            data-aos="zoom-in"
            onSubmit={formSubmit}
          >
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
          size="small"
        >
          <Header icon className="modal-title">
            <Icon name="exclamation triangle" />
            <span>Incorrect City</span>
          </Header>
          <Modal.Content>
            <p className="modal-desc">Please enter a valid city name</p>
            <Modal.Actions className="modal-button">
              <Button color="green" inverted onClick={() => setOpen(false)}>
                <Icon name="checkmark" /> Ok
              </Button>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
    </>
  );
};

export default Body;
