"use strict";

var MessageBoard = (function(originalMessageBoard) {


	/*
	establish arrays to hold the messsages and usernames
	*/

	var messageLog = [];
	var userLog = [];

	/*
	 allow users to submit messages by pressing the enter key on the input field
	 and ask for a username if none selected
	*/

	// var inputField = document.getElementById("inputText");
	var inputField = $("#inputText")[0];
	inputField.addEventListener("keypress", function (event) {
		if (event.which === 13) {
			var messageText = inputField.value;
			if (messageText === "") {
				alert("Please give me a message.");
				return;
			}
			// var userNames = document.getElementsByName("users");
			var userNames = $("[name=users]");
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


	/*
	attach an event listener to the delete button that removes the appropriate message
	from the DOM and from the array on a click
	*/

	function messageEventListener () {
		// var deleteProperty = document.getElementsByClassName("delete-me");
		var deleteProperty = $(".delete-me");
		var yup = deleteProperty.length - 1;

		deleteProperty[yup].addEventListener('click', function() {
			var targetID = event.target.id;
			var arrayNum = MessageBoard.removeMessage(targetID, messageLog);
			messageLog.splice(arrayNum, 1);
			userLog.splice(arrayNum, 1);
		});
		
	
	/* 
	attach an event listener to the edit button that displays the message-to-be-edited 
	in the input field and removes it from the array
	*/

		// var editButton = document.getElementsByClassName("edit-me");
		var editButton = $(".edit-me");
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


	/*
	remove the first message from the array and from the DOM when the listLimiter function is triggered
	*/

	function listLimiter () {
	var firstMessage = messageLog[0];
	messageLog.shift();
	// var actualMessage = document.getElementById(firstMessage);
	var actuallMessage = $("#firstMessage")[0];
	actualMessage.parentElement.remove();
	}


	/*
	add time and date to each message as it's submitted
	*/

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


		/*
		make an addMessage function available to other javascript files
		in order to append new messages to the message board while keeping 
		the messageLog array private

		make the text text of each message its id in order to make it easy 
		to find when editing or deleting
		*/

	    originalMessageBoard.addMessage = function(potatoe, tomato) {
	    	var messageList = $("#message-board-list")[0];
	    	// var messageList = document.getElementById("message-board-list");
	    	var createLi = document.createElement("LI");
	    	// var createLi = $("<li>");
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


	    /*
	    make a function available to the other javascript files the clears all 
	    messages from the message board and the messageLog array while keeping 
	    the array private
	    */

	    originalMessageBoard.goodbyeMessages = function(booty) {
	    	if (event.target.id === "clear-board-button") {
	    	messageLog = [];
			userLog = [];
	    	// var goodbyeBoard = document.getElementById("message-board-list");
	    	var goodbyeBoard = $("#message-board-list")[0];
	    	goodbyeBoard.innerHTML = "";
	    	} else {
	    		console.log("Syntax Error please piss off.");
	    	}
	    };

  return originalMessageBoard;

})(MessageBoard || {});

