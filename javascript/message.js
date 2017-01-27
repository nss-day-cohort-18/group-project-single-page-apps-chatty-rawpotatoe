"use strict";

// One IIFE should contain a function that accepts an element id, 
// and the user message, and then add the user's message - along with the delete button - 
// to the specified parent element. Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.

var MessageBoard = (function(originalMessageBoard) {

	var messageLog = [];

	var inputField = document.getElementById("inputText");
	inputField.addEventListener("keypress", function (event) {
		if (event.which === 13) {
			var messageText = inputField.value;
			MessageBoard.addMessage(messageText);
		}
	});


	function messageEventListener () {
		var deleteProperty = document.getElementsByClassName("delete-me");
		var yup = deleteProperty.length - 1;

		deleteProperty[yup].addEventListener('click', function() {
			var targetID = event.target.id;
			var newList = MessageBoard.removeMessage(targetID, messageLog);
			messageLog = newList;
			console.log("messageLog", messageLog);
		});
	}

 // Expose a function to read all messages and delete a single message

	    originalMessageBoard.addMessage = function(potatoe) {
	    	var messageList = document.getElementById("message-board-list");
	    	var createLi = document.createElement("LI");
	    	var theMessage = document.createTextNode(potatoe);

	    	var deleteButton = document.createElement("BUTTON");
	    	deleteButton.id = potatoe;
	    	deleteButton.className = "delete-me";

	    	deleteButton.innerHTML = "Delete";
	    	createLi.appendChild(theMessage);
	    	createLi.appendChild(deleteButton);
	    	messageList.appendChild(createLi);

	    	inputField.value = "";

	    	messageLog.push(potatoe);
	    	console.log("messageLog", messageLog);
	    	messageEventListener();

	    };

  // Return the new, augmented object with the new method on it
  return originalMessageBoard;

})(MessageBoard || {});


/* valueButton.id = "textAreaButton";
var buttonText = document.createTextNode("Create a Card");
valueButton.appendChild(buttonText);
document.body.appendChild(valueButton);
*/
