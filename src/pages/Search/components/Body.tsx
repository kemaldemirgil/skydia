import { Container } from 'semantic-ui-react'
import React from 'react'

const Body: React.FC = () => {
  return (
    <div className="body-container2">
      <Container className="body-wrapper">
        <h1>Search for a city</h1>
        <div className="ui action input search-wrapper">
          <input type="text" placeholder="Search..."/>
          <button className="ui button">Search</button>
        </div>
      </Container>
    </div>
  )
}

export default Body