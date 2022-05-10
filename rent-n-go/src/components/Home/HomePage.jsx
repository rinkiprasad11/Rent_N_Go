import React, { useEffect } from "react";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
//import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Header from "../Header/header";
import Hall_Furniture from "../../Images/Hall_Furniture.jpg";
import Desktop from "../../Images/Desktop.jpg";
import Table_Bookshell from "../../Images/Table_Bookshell.jpg";
import table from "../../Images/table.jpg";
import sofa from "../../Images/sofa.jpg";
import table2 from "../../Images/table2.jpg";
import bed1 from "../../Images/bed1.jpg";
import a1 from "../../Images/a1.jpg";
import a2 from "../../Images/a2.jpg";
import a3 from "../../Images/a3.jpg";
import a4 from "../../Images/a4.jpg";


const Home=()=>{
        const history = useHistory();
        useEffect(() => {
          document.title = "Home";
        }, []);

    return(

    <div>
    <Header/>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Hall_Furniture}
      alt="First slide"
    />
    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/login");}}>Order Now</Button>
      <h3>Good Furniture, Good Mood</h3>
      <p>Your home should be a story of who you are, and be a collection of what you love.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Desktop}
      alt="Second slide"
    />

    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/login");}}>Order Now</Button>
      <h3>Love it Here</h3>
      <p>I look at every piece of furniture and every object as an individual sculpture.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Table_Bookshell}
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button color="success" onClick={() => {history.push("/login");}}>Order Now</Button>
      <h3>Satisfy your comfort</h3>
      <p>Furniture is meant to be used and enjoyed .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


{/* <br/><br/> */}
<div className="row">
<div className="input-group" style={{margin:"5%"}}>
<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={table} />
  <Card.Body>
    <Card.Title>Table</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={sofa} />
  <Card.Body>
    <Card.Title>Sofa</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={table2} />
  <Card.Body>
    <Card.Title>Table</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={bed1} />
  <Card.Body>
    <Card.Title>Bed</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>
</div>
</div>

{/* <br/><br/> */}
<div className="row">
<div className="input-group" style={{margin:"5%"}}>
<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={a1} />
  <Card.Body>
    <Card.Title>Lamp</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={a4} />
  <Card.Body>
    <Card.Title>Combo</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', marginRight:"inherit"}}>
  <Card.Img variant="top" src={a3} />
  <Card.Body>
    <Card.Title>Chair</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={a2} />
  <Card.Body>
    <Card.Title>Table Lamp</Card.Title>
    <Card.Text>
    I look at every piece of furniture and every object as an individual sculpture.
    </Card.Text>
    <Button variant="primary" href="/register">Click For More</Button>
  </Card.Body>
</Card>
</div>
</div>
</div>
        
    )
}
export default Home