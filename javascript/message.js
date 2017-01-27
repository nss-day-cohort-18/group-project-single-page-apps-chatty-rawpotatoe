"use strict";

// One IIFE should contain a function that accepts an element id, 
// and the user message, and then add the user's message - along with the delete button - 
// to the specified parent element. Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.

var MessageBoard = (function(originalMessageBoard) {

	var messageLog = [];
	var userLog = [];
	// var users = {
 //  		names: ["Jordan", "Jeremy", "Adam", "Ruthie"]
	// };

	var inputField = document.getElementById("inputText");
	inputField.addEventListener("keypress", function (event) {
		if (event.which === 13) {
			var messageText = inputField.value;
			var userNames = document.getElementsByName("users");
			var theUserName;

			for (var k = 0; k < userNames.length; k++) {
				if (userNames[k].checked) {
					theUserName = userNames[k].id;
				}
			}
		MessageBoard.addMessage(messageText, theUserName);	

		}
	});


	function messageEventListener () {
		var deleteProperty = document.getElementsByClassName("delete-me");
		var yup = deleteProperty.length - 1;

		deleteProperty[yup].addEventListener('click', function() {
			var targetID = event.target.id;
			var newList = MessageBoard.removeMessage(targetID, messageLog);
			messageLog = newList;
		});
		
		
		var editButton = document.getElementsByClassName("edit-me");
		var length = editButton.length -1;
		editButton[length].addEventListener("click", function() { 
				var targetID = event.target.id;
				var editList = MessageBoard.removeMessage(targetID, messageLog);
				messageLog = editList;
				inputField.value = String(targetID);
				inputField.focus();
		});
	}

	function listLimiter () {
	var firstMessage = messageLog[0];
	messageLog.shift();
	var actualMessage = document.getElementById(firstMessage);
	actualMessage.parentElement.remove();
	}


 // Expose a function to read all messages and delete a single message

	    originalMessageBoard.addMessage = function(potatoe, tomato) {
	    	var messageList = document.getElementById("message-board-list");
	    	var createLi = document.createElement("LI");
	    	var theMessage = document.createTextNode(potatoe);
	    	var theUser = document.createTextNode(tomato);

	    	var deleteButton = document.createElement("BUTTON");
	    	var h6tag = document.createElement("H6");
	    	deleteButton.id = potatoe;
	    	deleteButton.className = "delete-me";

	    	deleteButton.innerHTML = "Delete";
	    	h6tag.appendChild(theUser);
	    	createLi.appendChild(h6tag);
	    	createLi.appendChild(theMessage);
	    	createLi.appendChild(deleteButton);
	    	messageList.appendChild(createLi);

	    	// Create edit button
	    	var editButton = document.createElement("BUTTON");
	    	editButton.id = potatoe;
	    	editButton.className = "edit-me";

	    	editButton.innerHTML = "Edit";
	    	createLi.appendChild(editButton);
	    	messageList.appendChild(createLi);

	    	inputField.value = "";

	    	messageLog.push(potatoe);
	    	userLog.push(tomato);
	    	messageEventListener();

	    	if (messageLog.length > 20) {
	    		listLimiter();
	    	};

	    },

	    originalMessageBoard.goodbyeMessages = function(booty) {
	    	if (event.target.id === "clear-board-button") {
	    	messageLog = [];
	    	var goodbyeBoard = document.getElementById("message-board-list");
	    	goodbyeBoard.innerHTML = "";
	    	} else {
	    		console.log("Syntax Error please piss off.");
	    	}
	    };

  // Return the new, augmented object with the new method on it
  return originalMessageBoard;

})(MessageBoard || {});


/* valueButton.id = "textAreaButton";
var buttonText = document.createTextNode("Create a Card");
valueButton.appendChild(buttonText);
document.body.appendChild(valueButton);
*/
