"use strict";

var MessageBoard = (function(originalMessageBoard) {

	return {
        removeMessage: function (potato) {
        var counter = 0;
            for (var u = 0; u < messageLog.length; u++) {
                if (counter === 0 && potato === messageLog[u]) {
                messageLog.splice(u, 1);
                counter = 1;
                console.log(messageLog);
                }
            };
        event.target.parentElement.remove();
        }
    }

  return originalMessageBoard;

})(MessageBoard || {});