$(function(){
	var value = "";
	var current = "";
	var operation = "";
	var answer = "";

	// place input into textarea
	$(".zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine").on("click",function(){
		value += $(this).attr("value");
		$(".text").html(value);
	});

	// add
	$(".add").on("click",function(){
		if(current == ""){
			current = parseInt(value);
			operation = "add";
			value = "";
		}
		else{
			operation = "add";
			current = parseInt(current)+parseInt(value);
			value = "";
		}
	});

	// subtract
	$(".subtract").on("click",function(){
		if(current == ""){
			current = parseInt(value);
			operation = "subtract";
			value = "";
		}
		else{
			current = parseInt(current) - parseInt(value);
			value = "";
		}
	});

	// multiply
	$(".multiply").on("click",function(){
		if(current == ""){
			current = parseInt(value);
			operation = "multiply";
			value = "";
		}
		else{
			current = parseInt(current) * parseInt(value);
			value = "";
		}
	});

	// divide
	$(".divide").on("click",function(){
		if(current == ""){
			current = parseInt(value);
			operation = "divide";
			value = "";
		}
		else{
			current = parseInt(current) / parseInt(value);
			value = "";
		}
	});

	// equals
	$(".equals").on("click",function(){
		if(operation == "add"){
			answer = parseInt(current) + parseInt(value);
			$(".text").html(answer);
		}
		else if(operation == "subtract"){
			answer = parseInt(current) - parseInt(value);
			$(".text").html(answer);
		}
		else if(operation == "multiply"){
			answer = parseInt(current) * parseInt(value);
			$(".text").html(answer);
		}
		else if(operation == "divide"){
			answer = parseInt(current) / parseInt(value);
			$(".text").html(answer);
		}
		current = "";
		value = answer;
		answer = "";
		operation = "";
	});

	// change value from positive to negative or negative to positive
	$(".plusMinus").on("click",function(){
		if(current == ""){
			value = parseInt(value) * -1;
			$(".text").html(value);
		}
		else{
			current = parseInt(value) * -1;
			$(".text").html(current);
		}
	});

	// clear
	$(".clear").on("click",function(){
		value = "";
		current = "";
		answer = "";
		operation = "";
		$(".text").html(value);
	});
});



