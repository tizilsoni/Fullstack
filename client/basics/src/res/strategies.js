import axios from 'axios';
import React, { Component } from 'react';
import { Row, Col , Jumbotron , Container ,  Button } from 'react-bootstrap';



const api = axios.create({
  baseURL: 'http://localhost:3001/api/strategies'
})

class Strategy extends Component{
        
    state ={
      strategies: []
    }
        constructor(){
          super();
          api.get('/').then(res => {
            console.log(res.data)
            this.setState({ strategies: res.data})
          })
        }
  render(){
      return(
        <Jumbotron className="bg-transparent text-center">
            <h1 className="mb-5">Available Strategies</h1>
            <Row>
                <Col className="mb-5">
                    <h2 className="mb-5">Name Of Strategy</h2>
                    {this.state.strategies.map(strategy => <h3 key={strategy.id}>{strategy.name}</h3>)}
                </Col>
                <Col className="mb-5">
                    <h2 className="mb-5">About The strategy</h2>
                    {this.state.strategies.map(strategy => <h3 key={strategy.id}>{strategy.description}</h3>)}
                </Col>
                <Col className="mb-5">
                    <h2 className="mb-5">Instrument Used</h2>
                    {this.state.strategies.map(strategy => <h3 key={strategy.id}>{strategy.instrument}</h3>)}
                </Col>
            </Row>
        </Jumbotron>

        );
    }

}

export default Strategy;