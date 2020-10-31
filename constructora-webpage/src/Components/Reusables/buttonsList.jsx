import React from 'react';
import './Styles/AddButtons.css'

const ButtonList = (props) => {
    return(
        <div class="container">
    <h1 class="text-center">Bootstrap Gradient Button</h1>
    <hr class="my-5" />
    
    <h4>Normal Buttons</h4>
	<div class="row">
		<div class="col">
		    <button class="col btn btn-purple-moon">Purple Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-ultra-voilet">Ultra Voilet</button>
		</div>
		<div class="col">
		    <button class="col btn btn-pink-moon">Pink Moon</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-cool-blues">Cool Blues</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-dark-blue">Dark Blue</button>
		</div> 
		</div>
	
	<div class="row mt-3">
	    <div class="col">
		    <button class="col btn btn-green-moon">Green Moon</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-orange-moon">Orange Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-dark-moon">Dark Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-light-moon">Light Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-funky-moon">Funky Moon</button>
		</div>
	</div>
	
	<hr class="my-5" />
	<h4>Rounded Buttons</h4>
	<div class="row">
		<div class="col">
		    <button class="col btn btn-purple-moon btn-rounded">Purple Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-ultra-voilet btn-rounded">Ultra Voilet</button>
		</div>
		<div class="col">
		    <button class="col btn btn-pink-moon btn-rounded">Pink Moon</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-cool-blues btn-rounded">Cool Blues</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-dark-blue btn-rounded">Dark Blue</button>
		</div> 
		</div>
	
	<div class="row mt-3">
	    <div class="col">
		    <button class="col btn btn-green-moon btn-rounded">Green Moon</button>
		</div> 
		<div class="col">
		    <button class="col btn btn-orange-moon btn-rounded">Orange Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-dark-moon btn-rounded">Dark Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-light-moon btn-rounded">Light Moon</button>
		</div>
		<div class="col">
		    <button class="col btn btn-funky-moon btn-rounded">Funky Moon</button>
		</div>
	</div>
	
	<hr class="my-5" />
	<h4>Fab Buttons</h4>
	<div class="row">
		<div class="col">
		    <button class="btn btn-purple-moon btn-fab">1</button>
		</div>
		<div class="col">
		    <button class="btn btn-ultra-voilet btn-fab">2</button>
		</div>
		<div class="col">
		    <button class="btn btn-pink-moon btn-fab">3</button>
		</div> 
		<div class="col">
		    <button class="btn btn-cool-blues btn-fab">4</button>
		</div> 
		<div class="col">
		    <button class="btn btn-dark-blue btn-fab">5</button>
		</div> 
		</div>
	
	<div class="row mt-3">
	    <div class="col">
		    <button class="btn btn-green-moon btn-fab">6</button>
		</div> 
		<div class="col">
		    <button class="btn btn-orange-moon btn-fab">7</button>
		</div>
		<div class="col">
		    <button class="btn btn-dark-moon btn-fab">8</button>
		</div>
		<div class="col">
		    <button class="btn btn-light-moon btn-fab">9</button>
		</div>
		<div class="col">
		    <button class="btn btn-funky-moon btn-fab">10</button>
		</div>
	</div>
</div>
    )
}

export default ButtonList;