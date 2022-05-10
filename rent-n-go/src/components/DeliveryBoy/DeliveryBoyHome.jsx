import DeliverBoyHeader from "./DeliverBoyHeader"
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
//import Carousel from "react-bootstrap/Carousel";
import delivery1 from "../../Images/deli1.jpg"
import delivery2 from "../../Images/deli2.jpg";
import delivery3 from "../../Images/deli3.jpg";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const DeliveryBoyHome=()=>{
    return(
        <div>
            <DeliverBoyHeader />
            <Carousel>
        
        <Carousel.Item>
        
          <img
            className="d-block w-100"
            src={delivery1}
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 >Welcome!!! Delivery Employee</h1>
          <Button color="success">Hello</Button>
            <div >
            <h3>Your vision, We delivered</h3>
            <p>Don't deliver a product , deliver an experince</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={delivery2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <Button color="success">Hello</Button>
            <h3 >Word Hard, Dream big</h3>
            <p > Count the Memories, not the miles</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={delivery3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <Button color="success">Hello</Button>
            <h3 >Feel the speed</h3>
            <p>We are as fast as air and as trustworthy as your heart.</p>
    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}
export default DeliveryBoyHome;