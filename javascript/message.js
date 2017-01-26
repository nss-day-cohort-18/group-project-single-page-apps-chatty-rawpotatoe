// One IIFE should contain a function that accepts an element id, 
// and the user message, and then add the user's message - along with the delete button - 
// to the specified parent element. Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.

var MessageBoard = (function(originalMessageBoard) {

	// 1.  Create an array for the messages
	var messageLog = [];

	// 2. Event Listener for enter button grabs .value of input field
	var inputField = document.getElementById("inputText");
	inputField.addEventListener("keypress", function(event){
		if (event.keycode === 13) {
			console.log("eat");
			var messageText = inputField.value;
			messageLog.push(messageText);
			console.log(messageLog);
			MessageBoard.addMessage(messageText);	
		}
	});

 // Expose a function to read all messages and delete a single message
	  return {
	  	readMessage: function(x) {
	    },
	    addMessage: function(potatoe) {
	    	var messageList = document.getElementById("message-board-list");
	    	var createLi = document.createElement("LI");
	    	var theMessage = document.createTextNode(potatoe);

	    	var deleteButton = document.createElement("BUTTON");
	    	deleteButton.id = potatoe;

	    	createLi.appendChild(theMessage);
	    	createLi.appendChild(deleteButton);
	    	messageList.appendChild(createLi);

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
