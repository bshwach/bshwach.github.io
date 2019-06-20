/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box
// $(".box").addClass("fun");

// // 3. When #box2 is clicked on
// $("#box2").on("click", function() {
// $(".box").removeClass("crazy");
// $("h1").addClass("crazy");
// $("#box3").slideToggle();

// });
// 	// a) Remove the crazy class from all the items with a class of .box
// 	// b) Add the crazy class to the h1
// 	// c) Slide toggle #box3


// // 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
// $(".box").on("click", function() {
// $("h1").html("jQuery Ninja");
// });

// // 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened. 
// // $(".moto").attr("src", "images/moto.jpg");

// $("#box1").on("click", function() {
// $(".moto").attr("src", "images/moto.jpg");

// })

/**
*
* Part 2:
*
*/

// codepen 

 $('#nav-toggle').click(function(){
	$(this).toggleClass('active');
});

 // end codepen

 

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
var fullchat1 = 0;

$("#dropdownMenu1").hide();
$("#dropdownButton1").on("click", function(){
$("#dropdownMenu1").slideToggle();

});

$("#entry1").on("submit", function(event){
	event.preventDefault();

var userEntry1 = $("#newEntry1").val();

$("#entries1").append("<tr><td>" + userEntry1 + "</td></tr>");

$("#newEntry1").val("");

fullchat1 = fullchat1 + userEntry1 + date;

$("#fullchat1").html(fullchat1 + date);

});



var fullchat2 = 0;

$("#dropdownMenu2").hide();
$("#dropdownButton2").on("click", function(){
$("#dropdownMenu2").slideToggle();

});


$("#entry2").on("submit", function(event){
	event.preventDefault();

var userEntry2 = $("#newEntry2").val();

$("#entries2").append("<tr><td>" + userEntry2 + "</td></tr>");

$("#newEntry2").val("");

fullchat2 = fullchat2 + userEntry2;

$("#fullchat2").html(fullchat2);

});





var fullchat3 = 0;

$("#dropdownMenu3").hide();
$("#dropdownButton3").on("click", function(){
$("#dropdownMenu3").slideToggle();

});


$("#entry3").on("submit", function(event){
	event.preventDefault();

	var userEntry3 = $("#newEntry3").val();

$("#entries3").append("<tr><td>" + userEntry3 + "</td></tr>");

$("#newEntry3").val("");

fullchat3 = fullchat3 + userEntry3;

$("#fullchat3").html(fullchat3);

});




/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
// $("#answer2").hide();

// // 9. Show the item with the id #answer1
// $("#answer1").show();

// // 10. When #question2 is clicked:
// $("#question2").on("click", function(){
// $("#answer2").slideDown();
// $("#answer1").slideUp();
// $("li").removeClass("active");
// $("#question2").addClass("active");

// });

// 	// a) Slide down #answer2
// 	// b) Slide up #answer1
// 	// c) Remove the active class from all list items
// 	// d) Add the active class to #question2

// // 11. When #question1 is clicked:
// $("#question1").on("click", function(){
// 	$("#answer1").slideDown();
// 	$("#answer2").slideUp();
// 	$("li").removeClass("active");
// 	$("#question1").addClass("active");
// });
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
