import React, { Component } from 'react';
import { Row, Col , Container ,  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../App.css';
import Cards from './cards';
import Footer from './footer.js';


class Landing extends Component{
	render(){
		return(
	          
	          
	          <div className="AppHeader">
	            
	              <Container fluid className="kontain">
	              
	                <h1>Welcome to Trade-Helper</h1>
	                <h3>
	                  A Simple Website For New traders To Get To Know About Different Kind of Instruments And Strategies.
	                </h3>

	              </Container>
	            
	            <Container fluid className="show2">
	            	<h1 className="text-center mb-5"> Some Of The Useful Tools and Websites</h1>
	            	<Cards />
	            </Container>


	            <Container fluid className="show text-center">
	                <Row>
	                    <Col>
	                      <h2 className="mb-5"> What is A Strategy? </h2>
	                        <h3 className="mb-5">
	                          A trading strategy is a systematic methodology used for buying and selling in the securities markets. A trading strategy is based on predefined rules and criteria used when making trading decisions. 
	                        </h3>
	                        <Link to="/strategies">
	                        <Button variant="dark" className="mb-5">
	                          View Strategies
	                        </Button>
	                        </Link>

	                    </Col>
	                    <Col>
	                      <h2 className="mb-5"> What is An Instrument? </h2>
	                        <h3 className="mb-5">
	                          Trading instruments refer to the different types of markets you can trade. Sometimes called securities, they range from commodity futures to stocks and CFDs, to currencies and metals, and more.
	                        </h3>
	                        <Link to="/instrument">
	                        <Button variant="dark" className="mb-5">
	                          See Instruments
	                        </Button>
	                        </Link>
	                    </Col>
	                </Row>
	            </Container>
	            <Footer />
	         </div>
	          
        );

	}
}

export default Landing;