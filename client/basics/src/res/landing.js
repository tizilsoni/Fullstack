import React, { Component } from 'react';
import { Row, Col , Jumbotron , Container ,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../App.css';


class Landing extends Component{
	render(){
		return(
	          
	          
	          <div className="AppHeader">
	            <Jumbotron fluid className="kontain bg-transparent">
	              <Container>
	                <h1 className="mb-5">Welcome to Trade Helper</h1>
	                <h2>
	                  A simple website For New traders to get to know about different kind of instruments and strategies.
	                </h2>
	              </Container>
	            </Jumbotron>
	            <Container fluid className="text-center">
	                <Row>
	                    <Col>
	                      <h2 className="mb-5"> What is A Strategy? </h2>
	                        <h3 className="mb-5">
	                          A trading strategy is a systematic methodology used for buying and selling in the securities markets. A trading strategy is based on predefined rules and criteria used when making trading decisions. 
	                        </h3>
	                        <Link to="/strategies">
	                        <Button className="bg-success">
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
	                        <Button className="bg-success">
	                          See Instruments
	                        </Button>
	                        </Link>
	                    </Col>
	                </Row>
	            </Container>
	         </div>
	          
        );

	}
}

export default Landing;