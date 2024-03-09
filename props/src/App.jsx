import React, { useState } from 'react';
import Header from './Header'
import { Card, Container, Row, Button, Col } from 'react-bootstrap'
import './App.css'
import { blog } from './Data/blog'


// Use State (Hook)


const App = () => {
  const [count, setCount] = useState(1)

  let increment=()=>{
    if (count<20){
      setCount(count+1)
    }else{
      setCount(1)
      alert("Limit Exceed")
    }
    
  }

  const [decr, setDecr] = useState(1)
  let decrement=()=>{
    if (decr>-10){
      setDecr(decr-1)
    }else{
      setDecr(1)
      alert("Limit Exceed")
    }
    
  }
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

       {/* <Container>
        <Row className='row'>
          { blog.map((v,i)=>{
            return(
              <ProductItems pitems={v} key={i}/>

            )
          })}
        
        
        
        </Row>
        </Container>  */}
      <button className='bg-[red] p-[10px]' onClick={increment}>Click(+)</button> <br />
      <p>{count}</p>
      <button className='bg-[red] p-[10px]' onClick={decrement}>Click(-)</button> <br />
      <p>{decr}</p>
    </div>
  )
}


function ProductItems({pitems}){

  return(
    
    <div className='col-lg-3 md-4'>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <h3><Card.Title>{pitems.title}</Card.Title></h3>
        <Card.Text>
          {pitems.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    )
}



export default App
