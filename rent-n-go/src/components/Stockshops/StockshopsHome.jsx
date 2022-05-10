import ShopHeader from "./StockshopsHeader";
import { Jumbotron, Container, Button, Row, Col } from "reactstrap";
//import Carousel from "react-bootstrap/Carousel";
import Pro1 from "../../Images/Pro1.jpg"
import Pro2 from "../../Images/Pro2.jpg";
import Pro3 from "../../Images/Pro3.jpg";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const StockshopsHome=()=>{
    return(
        <div>
        <ShopHeader/>
        <Carousel>
        
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src={Pro1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1>Welcome!! Stockshops</h1>
    <Button color="success">Order Now</Button>
      <h3>Good Food, Good Mood</h3>
      <p>If you talk about food just as much as you eat it, you're in good company.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pro2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <Button color="success">Order Now</Button>
      <h3>Love it Here</h3>
      <p>Count the Memories, not the Calories</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pro3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button color="success">Order Now</Button>
      <h3>Satisfy your Taste</h3>
      <p>Is it just me or does this meal look more scrumptious because I’m on a diet?</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
</div>
    )
}
export default StockshopsHome