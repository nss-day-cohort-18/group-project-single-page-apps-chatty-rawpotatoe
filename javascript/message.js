"use strict";

var MessageBoard = (function(originalMessageBoard) {

	var messageLog = [];
	var userLog = [];

	var inputField = document.getElementById("inputText");
	inputField.addEventListener("keypress", function (event) {
		if (event.which === 13) {
			var messageText = inputField.value;
			var userNames = document.getElementsByName("users");
			var theUserName;

			for (var k = 0; k <= userNames.length; k++) {
				
				if (k === userNames.length) {
					alert("Please select a name");
					return;
				} else if (userNames[k].checked === true) {
					theUserName = userNames[k].id;
					MessageBoard.addMessage(messageText, theUserName);	
					return;
				} 
			}
		}
	});


	function messageEventListener () {
		var deleteProperty = document.getElementsByClassName("delete-me");
		var yup = deleteProperty.length - 1;

		deleteProperty[yup].addEventListener('click', function() {
			var targetID = event.target.id;
			var arrayNum = MessageBoard.removeMessage(targetID, messageLog);
			messageLog.splice(arrayNum, 1);
			userLog.splice(arrayNum, 1);
		});
		
		
		var editButton = document.getElementsByClassName("edit-me");
		var length = editButton.length -1;

		editButton[length].addEventListener("click", function() { 
			var targetID = event.target.id;
			var indexNum = MessageBoard.removeMessage(targetID, messageLog);
			messageLog.splice(indexNum, 1);
			userLog.splice(indexNum, 1);
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

	function timeStampPlz () {
		var now = new Date();
		var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
		var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
		var suffix = ( time[0] < 12 ) ? "AM" : "PM";
		time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
		time[0] = time[0] || 12;
			for ( var i = 1; i < 3; i++ ) {
		    	if ( time[i] < 10 ) {
		      		time[i] = "0" + time[i];
		    	}
		  	}
	  	return date.join("/") + " " + time.join(":") + " " + suffix;
	}

	    originalMessageBoard.addMessage = function(potatoe, tomato) {
	    	var messageList = document.getElementById("message-board-list");
	    	var createLi = document.createElement("LI");
	    	var currentTime = timeStampPlz();

	    	var readyToOutput = 
	    			`<h6>${currentTime}</h6><h5>${tomato}</h5>
		    		<p>${potatoe}</p>
		    		<button class="delete-me" id="${potatoe}">Delete</button>
		    		<button class="edit-me" id="${potatoe}">Edit</button>`;

		   	createLi.innerHTML = readyToOutput;
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

  return originalMessageBoard;

})(MessageBoard || {});


