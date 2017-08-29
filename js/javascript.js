window.onload = init;

function init() {

	//target the submit button
	document.getElementById('submit').onclick = validate;

}

function validate() {

	var valid = true; //assume everything is ok 

	//validate the title
	//select the title using the DOM
	var title = document.getElementById('title'); 
	if(title.value.length < 2){
		//dont submit form
		valid = false;
	//use the DOM to select the first-name error message element and give it the error message
		document.getElementById('title-msg').innerHTML = 'Please enter a valid title';
	} else {
		//everything is fine
		document.getElementById('title-msg').innerHTML = '';
	}

	//validate the first name
	//select the first name using the DOM
	var firstName = document.getElementById('first-name'); 
	if(firstName.value.length < 2){
		//dont submit form
		valid = false;
	//use the DOM to select the first-name error message element and give it the error message
		document.getElementById('first-name-msg').innerHTML = 'First name must be at least 2 characters long';
	} else {
		//everything is fine
		document.getElementById('first-name-msg').innerHTML = '';
	}

	var familyName = document.getElementById('family-name');
	if(familyName.value.length < 2) {
		valid = false;
		document.getElementById('family-name-msg').innerHTML = 'Family name must be at least 2 characters long';
	} else {
		document.getElementById('family-name-msg').innerHTML = '';
	}

	//use the DOM and select the email inputs value
	var email = document.getElementById('email-address').value;
	var emailRegExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(!email || emailRegExp.test(email) == false) {
		//not valid
		document.getElementById('email-address-msg').innerHTML = 'Please enter a valid email address';
		valid = false;
	} else {
		//is valid
		document.getElementById('email-address-msg').innerHTML = '';
	}


if (valid == true) {
success();
}

	return false;


//if properly validated, an alert box will come up alerting them that the reservation enquiry has been initiated.
}	function success()
{
alert("Thank you " + document.forms[0]["title"].value + " " + document.forms[0]["family-name"].value + ", your booking enquiry has been made.")
}



/*!
* jQuery JavaScript Library v1.5.2
* http://jquery.com/
*
* Copyright 2011, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2011, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Thu Mar 31 15:28:23 2011 -0400
*/


//this code initites the slideshow on the index.html page
$(document).ready(function() {
$('.slideshow').cycle({
fx: 'fade'
});
});

