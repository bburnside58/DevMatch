var _ = require('lodash');

// $(document).ready(function(){


//submit button function to capture user info and calculate personality match

$( "#submit" ).click(function(){
//form validation function
// function validateForm() {
// 		  var isValid = true;
		  //this checks each question the user must enter
		  // $('.form-control').each(function() {
		  //   if ( $(this).val() === "" )
		  //       isValid = false;
		  // });
		  //this checks all personality questions have been answered
		  // $('.chosen-select').each(function() {
		  // 	if( $(this).val() === "")
		  // 		isValid = false
		  // })
		  //uses the results of the validation to collect data or alert user
		//   return isValid;
		// }
		// If all required fields are filled
		// if (validateForm() == true)
	
	// {
		
//LODASH USED HERE

//.map will run every element through the parseInt arguement
//parseInt will change the array from a string to numbers

var answer = _.map([$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ], _.parseInt);

//_.sum will add the array together
var total = _.sum(answer);
console.log(total);

//subtracts the points from 100 (100%) to get the % closest to ideal candidate
var score = _.subtract(100-total);
console.log(score);

		

   //jQuery verison - will delete once lodash works 100%
	
  // 		//this variable changes all of the string values to numbers and adds them together to get a point sum
  // 		var answer = parseInt($("#q1").val())+parseInt($("#q2").val())+parseInt($("#q3").val())+parseInt($("#q4").val())+parseInt($("#q5").val())+parseInt($("#q6").val())+parseInt($("#q7").val())+parseInt($("#q8").val())+parseInt($("#q9").val())+parseInt($("#q10").val())
  // 		console.log(answer);


  // 		//this multiplies each answer value by 2 because there are only 50 possible points and subtracts it from 100"%". This will give the "%"" match the applicants work style matches ideal candidate style
  // 		var totalPercentage =100-(parseInt(answer)*2)
		// console.log(totalPercentage);


			

			// Creates an object for the user's data
	    	// var applicantData = {
	    	// 	first_name: $("#first_name").val(),
	    	// 	last_name: $("#last_name").val(),
	    	// 	address: $("#address").val(),
	    	// 	phone: $("#phone").val(),
	    	// 	gitHub: $("#gitHub").val(),
	    	// 	linkedIn: $("#linkedIn").val(),
	    	// 	score: (totalPercentage)
	    	// }


			

	    	// Grab the URL of the website
	    	//var currentURL = window.location.origin;

	    	// AJAX post the data to the applicant API. Need to enter path for API in the quotes /api/applicant
	    	//$.post(currentURL + "", applicantData, function(data){


	    		//alert("Thank you for your application. A recruiter will be in contact.")//need to change this from an alert to a model
	    	//});

	//}
	//else
	//{
		//alert("Please fill out all questions before submitting");
	//}
	//return false
	});//end of form validation
	

	//end of submit onclick
 //end of document ready