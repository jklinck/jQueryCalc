$(function(){
	var value = "";
	var newNum;
	var current;
	$(".zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine").on("click",function(){
		// if(value != null){
		// 	newNum = $(this).attr("value");
		// 	value += newNum;
		// }
		value += $(this).attr("value");
		$(".text").html(value);
	});


	// add
	$(".add").on("click",function(){
		current = value;
		value="";
	});

	// subtract
	$(".subtract").on("click",function(){

	});

	// multiply
	$(".multiply").on("click",function(){

	});

	// divide
	$(".divide").on("click",function(){

	});


	// equals
	$(".equals").on("click",function(){

	})


	// clear
	$(".clear").on("click",function(){
		value = "";
		$(".text").html(value);
	});
});



