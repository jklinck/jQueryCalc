$(function(){
	var value = ""; // displays user input in text area
	var value2 = ""; // collects inputs for answerArr
	var current = ""; // collects current user input
	var answer = ""; // uses parser.js to evaluate "value" variable
	var answerArr = []; // separates numbers and operators into separate indices
	var currentIndex = 0; // used to increment indices of answerArr
	var sqrRt = false;
	var sqrRtIcon = $(".sqrRt").attr("value");

	// place input into textarea
	$(".input").on("click",function(){
		current = $(this).attr("value");
		if(current == "+" || current == "-" || current == "*" || current == "/"){
			currentIndex++;
			answerArr[currentIndex] = current;
			value += current;
			currentIndex++;
			value2 = "";
			$(".text").html(value);
		}
		else if(current == sqrRtIcon){
			answerArr[currentIndex] = current;
			value += current;
			currentIndex++;
			value2 = "";
			$(".text").html(value);
		}
		else if(current == "pi"){
			current = 3.142857143;
			value += current;
			value2 += current; // kept track of to populate answerArr[]
			answerArr[currentIndex] = value2;
			$(".text").html(value);
		}
		// else if(current == sqrRtIcon){
		// 	value += current;
		// 	$(".text").html(value);
		// }
		// else if(sqrRt){

		// }
		else{
			value += current;
			value2 += current; // kept track of to populate answerArr[]
			answerArr[currentIndex] = value2;
			$(".text").html(value);
		}
	});

	// // change value from positive to negative or negative to positive
	$(".plusMinus").on("click",function(){
		answerArr[currentIndex] = "(" + (answerArr[currentIndex]) * (-1) + ")";
		// the new value of answerArr[currentIndex] needs to be put in parethesis otherwise parser.js will throw a parity error
		value = ""; 
		// value is cleared so it can be repopulated with the for loop below
		for(var i=0;i<answerArr.length;i++){
			value += answerArr[i];
		}
		$(".text").html(value);
	});

	$(".sqrRt").on("click",function(){
		sqrRt = true;
		// sets sqrRt variable to true so that it can perform the if statement in the equals method below
	})

	// equals
	$(".equals").on("click",function(){
		if(sqrRt){
			answerArr.shift(); // this is needed to remove the square root icon from answerArr so that answerArr[0] is set to the number we are trying to calculate the square root of
			value = answerArr[0];
			answer = Math.sqrt(value);
			$(".text").html(answer);
			sqrRt = false;
		}
		// use Parser.evaulate function from parser.js
		else{
			answer = Parser.evaluate(value);
			$(".text").html(answer);
		}
		value = answer;
		currentIndex = 0;
		answerArr = [value]; // this is done so the only value left in answerArr[] is the answer from the current calculation 
		current = "";
		value2 = "";
		answer = "";
	});

	// clear
	$(".clear").on("click",function(){
		value = "";
		value2 = "";
		current = "";
		answer = "";
		currentIndex = 0;
		answerArr = [];
		sqrRt = false;
		$(".text").html(value);
	});
});







