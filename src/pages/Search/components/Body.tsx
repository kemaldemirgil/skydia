import { Container, Input } from 'semantic-ui-react'
import React from 'react'

const Body: React.FC = () => {
  return (
    <div className="body-container">
      <Container className="body-wrapper">
      <Input action='Search' placeholder='Search...' />
      </Container>
    </div>
  )
}

export default Body