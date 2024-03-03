import React from 'react'
import Header from './Header'
import { Card, Container, Row, Button } from 'react-bootstrap'
import './App.css'


const App = () => {
  let info={
    name:"John",
    age:30
  }
  return (

    
    <div>
      <Header info = {info}/>

      {/* child props  */}

      {/* <Header info = {info} >
          <h1>Header Section</h1>
        </Header> */}

       <Container>
        <Row>

          <ProductItems/>
          <ProductItems/>
          <ProductItems/>
        
        
        </Row>
        </Container> 

    </div>
  )
}


function ProductItems(){

  return(
    
    <col-lg-3>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </col-lg-3>
    )
}
export default App
