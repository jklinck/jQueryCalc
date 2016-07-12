$(function(){
	var value = "";
	var current = "";
	var operation = "";
	var answer = "";
	var start = 0;
	var add = $(".add").attr("value");
	var subtract = $(".subtract").attr("value");
	var multiply = $(".multiply").attr("value");
	var divide = $(".divide").attr("value");

	// place input into textarea
	$(".input").on("click",function(){
		current = $(this).attr("value");
		value += current;
		$(".text").html(value);
	});

	// // equals
	$(".equals").on("click",function(){
		// user Parser.evaulate function from parser.js
		answer = Parser.evaluate(value);
		$(".text").html(answer);
		value = answer;
	});

	// // change value from positive to negative or negative to positive
	$(".plusMinus").on("click",function(){
		// in order to get this working I need to separate each number and operator into separate indices inside of an array, at which point I can perform a +/- operation on that individual number and then in the equals above I can loop through it and concatenate it into the answer variable
	});

	// clear
	$(".clear").on("click",function(){
		value = "";
		current = "";
		answer = "";
		$(".text").html(value);
	});
});



