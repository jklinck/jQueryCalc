$(function(){
	var value = ""; // displays user input in text area
	var value2 = ""; // collects inputs for answerArr
	var current = ""; // collects current user input
	var answer = ""; // uses parser.js to evaluate "value" variable
	var answerArr = []; // separates inputs into distinct numbers and operators
	var currentIndex = 0; // used to increment indices of answerArr

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
		// value is cleared so it can be repopulated wit the for loop below
		for(var i=0;i<answerArr.length;i++){
			value += answerArr[i];
		}
		$(".text").html(value);
	});

	// equals
	$(".equals").on("click",function(){
		// user Parser.evaulate function from parser.js
		answer = Parser.evaluate(value);
		$(".text").html(answer);
		value = answer;
		current = "";
		value2 = "";
		answer = "";
		currentIndex = 0;
		answerArr = [value]; // this is done so the only value left in answerArr[] is the answer from the previous calculation and can thus start a new calculation
	});

	// clear
	$(".clear").on("click",function(){
		value = "";
		value2 = "";
		current = "";
		answer = "";
		currentIndex = 0;
		answerArr = [];
		$(".text").html(value);
	});
});



