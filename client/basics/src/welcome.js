import React from 'react';
import {useState} from 'react';
import './Req/welcome.css';
import Modal from './modal.js';
import Backdrop from './backdrop.js'


function Welcome(){
    const [ modalIsOpen , setModalIsOpen ] = useState(false);

    function handleInstruments() {
        setModalIsOpen(true);
    }
    function handleStrategies() {
        setModalIsOpen(true);

    }
    function popUp(){
        setModalIsOpen(false);
    }
	return(
        <div>
		 <div className="home-page text-center mt-5 white-text">
		   <h1>Welcome To The Trade Helper Page</h1><br />
		   <br />
		   <br />
		   <h2 className="white-text mt-5 mb-5">A Simple Website Useful For New Traders/Investors To Guide Them Through Different Kind Of Instruments And Strategies</h2><br/><br/><br/>
		        <div className="row">
                    <div className="col-sm bg-success">
                        <h3 className="mt-3">About Strategies</h3>
                        <p className="para mt-5"> A trading strategy is a fixed plan that is designed to achieve a profitable return by going long or short in markets. The main reasons that a properly researched trading strategy helps are its verifiability, quantifiability, consistency, and objectivity.
                             For every trading strategy one needs to define assets to trade, entry/exit points and money management rules. Bad money management can make a potentially profitable strategy unprofitable.</p>
                             <div className="text-center mt-5 mb-5">
                                <button className="btn learnmore" onClick={handleStrategies}>Show Strategies</button>
                             </div>

                    </div>
                    <div className="col-sm bg-success">
                        <h3 className="mt-3">About Instruments</h3>
                        <p className="para mt-5">Trading instruments refer to the different types of markets you can trade. Sometimes called securities, they range from commodity futures to stocks and CFDs, to currencies and metals, and more.</p>
                        <div className="text-center mt-5 mb-5">
                            <button className="btn learnmore" onClick={handleInstruments} >Show instruments</button>
                         </div>
                    </div>
                </div>
		 </div>
         {modalIsOpen && <Modal />}
         {modalIsOpen && <Backdrop onClose={popUp} />}
        </div>

		)
}

export default Welcome;