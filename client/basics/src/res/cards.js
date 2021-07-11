import React, { Component } from 'react';
import {Card , CardDeck} from 'react-bootstrap';
import './cards.css'

class Cards extends Component{

  render(){
  return(
    <>
    		<CardDeck className="anime">
				<Card border="primary" className="bg-dark ml-5 mb-5">
    				<Card.Img variant="top" className="card-img1"/>
    				<Card.Body>
      					<Card.Title>TRADING VIEW</Card.Title>
      						<Card.Text>
        						A Sophisticated charting platform which is being used
                    by most of the traders nowdays. Feature Rich and multi
                    indicator charts, charting made easy!

      						</Card.Text>    
    				</Card.Body>
    				<Card.Footer>
      					<a className="text-right" href="https://in.tradingview.com/">Take Me There!</a>
    				</Card.Footer>
  				</Card>
  				<Card border="info" className="bg-dark ml-5 mb-5 mr-5">
    				<Card.Img variant="top" className="card-img2"/>
    				<Card.Body>
      					<Card.Title>CHARTINK</Card.Title>
      						<Card.Text>
        						Chartink.com provides tools for technical and fundamental analysis. 
                    We provide the following tools free of cost. 
                    Candlestick & PnF Charts. Custom Stock Screeners.
      						</Card.Text>
    				</Card.Body>
    				<Card.Footer>
      					<a className="text-info" href="https://chartink.com/">Take Me There!</a>
    				</Card.Footer>
  				</Card>
  				<Card border="success" className="bg-dark mb-5 mr-5">
    				<Card.Img variant="top" className="card-img3"/>
    				<Card.Body>
      					<Card.Title>SCREENER</Card.Title>
      						<Card.Text>
        						Screener provides financial data of listed Indian companies.
                    Helps you in automating much of your stock research process.
      						</Card.Text>
    				</Card.Body>
    				<Card.Footer>
                <a className="text-success" href="https://www.screener.in/">Take Me There!</a>
   	 				</Card.Footer>
  				</Card>
			  </CardDeck>
        <CardDeck className="anime">
          <Card border="info" className="bg-dark mb-5 ml-5 mr-5">
            <Card.Img variant="top" className="card-img4"/>
            <Card.Body>
                <Card.Title>OPSTRA</Card.Title>
                  <Card.Text>
                    Opstra is the options analytics platform where you learn about options basics,options greeks, basic and advanced options strategies and an in-depth dive into how everything works underneath all of it. 
                  </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a className="text-info" href="https://opstra.definedge.com">Take Me There!</a>
            </Card.Footer>
          </Card>
          <Card border="danger" className="bg-dark mb-5 mr-5">
            <Card.Img variant="top" className="card-img5"/>
            <Card.Body>
                <Card.Title>INVESTOPEDIA</Card.Title>
                  <Card.Text>
                    Investopedia is a financial website headquartered in New York City.Investopedia provides investment dictionaries, advice, reviews, ratings, and comparisons of financial products such as securities accounts.
                  </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a className="text-danger" href="https://www.investopedia.com">Take Me There!</a>
            </Card.Footer>
          </Card>
          <Card border="success" className="bg-dark mb-5 mr-5">
            <Card.Img variant="top" className="card-img6"/>
            <Card.Body>
                <Card.Title>MARKET PULSE (Android)</Card.Title>
                  <Card.Text>
                    Simply the most powerful trading app built for Traders with advanced Tracker, Chart, Alerts & Scanner on mobile.
                  </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a className="text-success" href="https://play.google.com/store/apps/details?id=in.marketpulse&hl=en_IN&gl=US">Take Me There!</a>
            </Card.Footer>
          </Card>
        </CardDeck>
    </>

  );
}
}

export default Cards;