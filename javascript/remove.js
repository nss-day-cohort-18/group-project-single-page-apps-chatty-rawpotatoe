"use strict";

var MessageBoard = (function(originalMessageBoard) {
	  
	    /* 
        make a function available to other javascript files that removes messages
        from the DOM and from the array
        */

        originalMessageBoard.removeMessage = function(potato, messageList) {
            for (var u = 0; u < messageList.length; u++) {
                if (potato === messageList[u]) {
                var arrayNum = u;
                }
            };
        	//event.target.parentElement.remove();
            $(event.target).parent().remove();
            return arrayNum;
        };

  		return originalMessageBoard;

})(MessageBoard || {});