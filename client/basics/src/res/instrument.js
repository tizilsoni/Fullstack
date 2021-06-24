import axios from 'axios';
import React, { Component } from 'react';
import { Row, Col , Jumbotron , Container ,  Button } from 'react-bootstrap';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/instruments'
})

class Instrument extends Component{
    state ={
      instruments: []
    }
        constructor(){
          super();
          api.get('/').then(res => {
            console.log(res.data)
            this.setState({ instruments: res.data})
          })
        }
  render(){
      return(
        <Jumbotron className="bg-transparent text-center">
            <h1 className="mb-5">Available Instruments</h1>
            <Row>
                <Col className="mb-5">
                    <h2 className="mb-5">Name Of Strategy</h2>
                    {this.state.instruments.map(instrument => <h3 className="mb-5" key={instrument.id}>{instrument.name}</h3>)}
                </Col>
                <Col className="mb-5">
                    <h2 className="mb-5">About The strategy</h2>
                    {this.state.instruments.map(instrument => <p className="mb-5" key={instrument.id}>{instrument.description}</p>)}
                </Col>
                <Col className="mb-5">
                    <h2 className="mb-5">Instrument Used</h2>
                    // {this.state.instruments.map(instrument => <h3 className="mb-5" key={instrument.id}>{instrument.risk}</h3>)}
                </Col>
            </Row>
        </Jumbotron>
        );
    }

}

export default Instrument;