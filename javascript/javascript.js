var messageField = document.getElementById("inputText");
var clearButton = document.getElementById("clear-board-button");
var darkCheck = document.getElementById("dark-theme-checkbox");
var largeCheck = document.getElementById("large-text-checkbox");


var MessageBoard = (function(originalMessageBoard) {

	 var objectRequest = new XMLHttpRequest();
      
     objectRequest.addEventListener("load", function () {
    	objectOfMessages = JSON.parse(event.target.responseText);

    	for (var i = 0; i < objectOfMessages.length; i++) {
    		var eachMessage = objectOfMessages[i];
    		MessageBoard.addMessage(String(eachMessage));
    	};
     });

     objectRequest.open("GET", "messages.json");
     objectRequest.send();

     darkCheck.addEventListener('change', function(){
     	var bodyElement = document.getElementById("chatty-body");
     	bodyElement.classList.toggle("dark-theme");
     });

     largeCheck.addEventListener('change', function(){
     	var listOfMessages = document.getElementById("message-board-list");
     	listOfMessages.classList.toggle("large-font");
     });


  return originalMessageBoard;

})(MessageBoard || {});