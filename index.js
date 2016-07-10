$(function(){
	var value = "";
	var current = "";
	var operation = "";
	var answer = "";

	// place input into textarea
	$(".zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .decimal").on("click",function(){
		value += $(this).attr("value");
		$(".text").html(value);
	});

	// add
	$(".add").on("click",function(){
		if(current == ""){
			current = parseFloat(value);
			operation = "add";
			value = "";
		}
		else{
			operation = "add";
			current = parseFloat(current)+parseFloat(value);
			value = "";
		}
	});

	// subtract
	$(".subtract").on("click",function(){
		if(current == ""){
			current = parseFloat(value);
			operation = "subtract";
			value = "";
		}
		else{
			current = parseFloat(current) - parseFloat(value);
			value = "";
		}
	});

	// multiply
	$(".multiply").on("click",function(){
		if(current == ""){
			current = parseFloat(value);
			operation = "multiply";
			value = "";
		}
		else{
			current = parseFloat(current) * parseFloat(value);
			value = "";
		}
	});

	// divide
	$(".divide").on("click",function(){
		if(current == ""){
			current = parseFloat(value);
			operation = "divide";
			value = "";
		}
		else{
			current = parseFloat(current) / parseFloat(value);
			value = "";
		}
	});

	// equals
	$(".equals").on("click",function(){
		if(operation == "add"){
			answer = parseFloat(current) + parseFloat(value);
			$(".text").html(answer);
		}
		else if(operation == "subtract"){
			answer = parseFloat(current) - parseFloat(value);
			$(".text").html(answer);
		}
		else if(operation == "multiply"){
			answer = parseFloat(current) * parseFloat(value);
			$(".text").html(answer);
		}
		else if(operation == "divide"){
			answer = parseFloat(current) / parseFloat(value);
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
			value = parseFloat(value) * -1;
			$(".text").html(value);
		}
		else{
			current = parseFloat(value) * -1;
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



