import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{

  render(){
  return(

  	 <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h3>Trade-Helper</h3>
          <h4>Made With </h4>
  	 			<ul>
            <li><a href="https://nodejs.org/en/">Node</a></li>
  	 				<li><a href="https://reactjs.org/">React</a></li>
  	 				<li><a href="https://react-bootstrap.github.io/">React-Bootstrap</a></li>
  	 				<li><a href="https://expressjs.com/">Express</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Learn About</h4>
  	 			<ul>
  	 				<li><a href="https://www.investopedia.com/terms/o/option.asp">Options</a></li>
  	 				<li><a href="https://www.investopedia.com/terms/f/futures.asp">Futures</a></li>
  	 				<li><a href="https://www.investopedia.com/terms/e/equity.asp">Equity</a></li>
  	 				<li><a href="https://www.investopedia.com/terms/m/mutualfund.asp">Mutual Fund</a></li>
  	 				<li><a href="https://www.investopedia.com/terms/i/indexfund.asp">Index Fund</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Delhi, India </a></li>
            <li><a href="soni.tizil@gmail.com">Contact@admin</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Reach Me</h4>
  	 			<div class="social-links">
  	 				<a href="https://github.com/tizilsoni"><i class="fab fa-github"></i></a>
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="https://www.instagram.com/tradersgarage/"><i class="fab fa-instagram"></i></a>
  	 				<a href="https://twitter.com/tizilsoni"><i class="fab fa-twitter"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	  </div>
    </footer>



  	);
}
}

export default Footer;