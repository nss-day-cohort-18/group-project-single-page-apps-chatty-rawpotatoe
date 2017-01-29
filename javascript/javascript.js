"use strict";

var MessageBoard = (function(originalMessageBoard) {
	var messageField = document.getElementById("inputText");
	var clearButton = document.getElementById("clear-board-button");
	var darkCheck = document.getElementById("dark-theme-checkbox");
	var largeCheck = document.getElementById("large-text-checkbox");
	var objectRequest = new XMLHttpRequest();
    
      
     objectRequest.addEventListener("load", function (potato) {
    	var objectOfMessages = JSON.parse(event.target.responseText);
        var funnyUserNames = ["Ruthie", "Potatoe", "Jordan", "Jeremy", "potatoe", "potatoe"]

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

     darkCheck.addEventListener('change', function(){
     	var bodyElement = document.getElementById("chattyBody");
     	bodyElement.classList.toggle("dark-theme");
     });

     largeCheck.addEventListener('change', function(){
     	var listOfMessages = document.getElementById("message-board-list");
     	listOfMessages.classList.toggle("large-font");
     });

     clearButton.addEventListener('click', function() {
        MessageBoard.goodbyeMessages();
     });

  return originalMessageBoard;

})(MessageBoard || {});










