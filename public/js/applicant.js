

$(document).ready(function(){


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
	});

	//end of submit onclick
 //end of document ready