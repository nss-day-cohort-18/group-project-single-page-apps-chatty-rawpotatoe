"use strict";

var MessageBoard = (function(originalMessageBoard) {
	// var messageField = document.getElementById("inputText");
    // var clearButton = document.getElementById("clear-board-button");
    // var darkCheck = document.getElementById("dark-theme-checkbox");
    // var largeCheck = document.getElementById("large-text-checkbox");

    var messageField = $("#test")[0];
    var clearButton = $("#clear-board-button")[0];
    var darkCheck = $("#dark-theme-checkbox")[0];
    var largeCheck = $("#large-text-checkbox")[0];

    /*
    load the messages from a JSON file and attach usernames to them so that they 
    don't display under the name "undefined"
    */
   
            var jqxhr = $.get( "messages.json", 
            function() {
                    console.log( "success" );
                    var objectOfMessages = JSON.parse(event.target.responseText);
                    var funnyUserNames = ["Ruthie", "Potatoe", "Jordan", "Jeremy", "Potatoe", "Potatoe"]
                        for (var i = 0; i < objectOfMessages.length; i++) {
                                var eachMessage = objectOfMessages[i];
                                var eachUser = funnyUserNames[i]
                                MessageBoard.addMessage(String(eachMessage), eachUser);
                        };
            });
 
        /*

     objectRequest.addEventListener("load", function (potato) {
    	
        var objectOfMessages = JSON.parse(event.target.responseText);
        var funnyUserNames = ["Ruthie", "Potatoe", "Jordan", "Jeremy", "Potatoe", "Potatoe"]

    	for (var i = 0; i < objectOfMessages.length; i++) {
        		var eachMessage = objectOfMessages[i];
                var eachUser = funnyUserNames[i]
        		MessageBoard.addMessage(String(eachMessage), eachUser);
    	};
     });

     objectRequest.addEventListener("error", function(){
     	console.log("Raw Potatoe knows all");
     });

     objectRequest.open("GET", "messages.json");
     objectRequest.send();
*/
     
     /*
     allow the user to change the color scheme by checking or unchecking a box
     */

     darkCheck.addEventListener('change', function(){

     	//var bodyElement = document.getElementById("real-body"); 
        //var navElement = document.getElementById("fixedNav");
        //var checkboxs = document.getElementById("themeCheckbox");
        var bodyElement = $("#real-body")[0];
        var navElement = $("#fixedNav")[0];
        var checkboxs = $("#themeCheckbox")[0];        
        
     	//bodyElement.classList.toggle("dark-theme");
        //bodyElement.classList.toggle("white-letters");
        $(bodyElement).toggleClass("dark-theme");
        $(bodyElement).toggleClass("white-letters");

        //navElement.classList.toggle("dark-theme");
        //navElement.classList.toggle("white-letters");
        $(navElement).toggleClass("dark-theme");
        $(navElement).toggleClass("white-letters");

        //checkboxs.classList.toggle('white-letters');
        //checkboxs.classList.toggle('white-theme');
        $(checkboxs).toggleClass("white-letters");
        $(checkboxs).toggleClass("white-theme");

     });


    /*
    allow the user to change the size of the message text by checking or unchecking a box
    */

     largeCheck.addEventListener('change', function(){
     	// var listOfMessages = document.getElementById("message-board-list");
     	var listOfMessages = $("#message-board-list")[0];
        listOfMessages.classList.toggle("large-font");
     });


     /*
     allow the user to clear all messages from the board
     */

     clearButton.addEventListener('click', function() {
        MessageBoard.goodbyeMessages();
     });

  return originalMessageBoard;

})(MessageBoard || {});








