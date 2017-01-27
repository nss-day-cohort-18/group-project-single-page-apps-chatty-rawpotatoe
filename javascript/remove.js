"use strict";

var MessageBoard = (function(originalMessageBoard) {
	  
	    originalMessageBoard.removeMessage = function(potato, messageList) {
            for (var u = 0; u < messageList.length; u++) {
                if (potato === messageList[u]) {
                messageList.splice(u, 1);
                }
            };
        	event.target.parentElement.remove();
        	return messageList;
        };

        

  		return originalMessageBoard;

  // Return the new, augmented object with the new method on it

})(MessageBoard || {});



