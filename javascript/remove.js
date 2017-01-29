"use strict";

var MessageBoard = (function(originalMessageBoard) {
	  
	    originalMessageBoard.removeMessage = function(potato, messageList) {
            for (var u = 0; u < messageList.length; u++) {
                if (potato === messageList[u]) {
                var arrayNum = u;
                }
            };
        	event.target.parentElement.remove();
        	return arrayNum;
        };

        

  		return originalMessageBoard;

  // Return the new, augmented object with the new method on it

})(MessageBoard || {});



