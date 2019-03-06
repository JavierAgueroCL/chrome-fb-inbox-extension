setInterval(function () {
	var simulateClick = function (elem) {
		// Create our event (with options)
		var evt = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		});
		// If cancelled, don't dispatch our event
		var canceled = !elem.dispatchEvent(evt);
	};
	var someLink = document.querySelector('[data-testid=action_done]');


	document.onkeypress = function (e) {
		e = e || window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '45'){
		 console.log("enter");
			simulateClick(someLink);
		}


	}

	document.getElementsByClassName("uiTextareaAutogrow")[0].focus();
		console.log("carga");
},1000);
