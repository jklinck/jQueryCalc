Calculator built with jQuery, parser.js and Twitter Bootstrap. 

User input is kept track of in two separate variables. "value" to populate the textarea element and "answerArr[]"" so the calcualtion can be looped if the user inputs "+/-" to change the sign of the current number. Once the user enters "=" the equals function uses Parser.execute() (from parser.js) to evaluate the calculation and display the answer in the textarea element.






