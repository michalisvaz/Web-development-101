var isFormal = false;
var darkMode = false;

var date = new Date();
var day = date.getDay();
var dateMessagePlace = document.getElementById("date-message");
var format = {year: 'numeric', month: 'long', day: 'numeric' };
var dateFormatted = date.toLocaleDateString("en-US", format);
var message = "The date is " + dateFormatted;
if (day === 0) {
	message += " and luckily for you it is still Sunday.";
} else if (day === 1) {
	message += ". It's Monday, the work-week is starting.";
} else if (day === 2) {
	message += ". It's Tuesday and you are probably already tired, but don't worry, weekend is coming.";
} else if (day === 3) {
	message += ". You are already at the middle of the week.";
} else if (day === 4) {
	message += ". Two days until weekend!";
} else if (day === 5) {
	message += ". One day until weekend!!";
} else {
	message += ". It's Saturday, enjoy your weekend!!!";
}
dateMessagePlace.innerHTML = message;

function ChangeColors() {
	darkMode = !darkMode;
	applyTheme();
}

function applyTheme() {
	var colBackGround, colText;
	if (darkMode) {
		colBackGround = "black";
		colText = "white";
	} else {
		colBackGround = "aliceblue";
		colText = "black";
	}
	document.body.style.backgroundColor = colBackGround;
	document.body.style.color = colText;
}

function ChangeFormality() {
	isFormal = !isFormal;
	applyFormality();
}

function applyFormality() {
	var fontFamily, fontSize;
	var myNav = document.getElementsByTagName("NAV")[0];
	var firstLink = myNav.getElementsByTagName("A")[0];
	var sourceText = document.getElementById("source");
	if (isFormal) {
		fontFamily = "Times New Roman, Times, serif";
		fontSize = "1.1em";
		firstLink.innerHTML = "General Information about Python";
		sourceText.innerHTML = "Source: ";
	} else {
		fontFamily = "New Tegomin, serif";
		fontSize = "1em";
		firstLink.innerHTML = "Fun stuff about Python";
		sourceText.innerHTML = "Where did I find these? ";
	}
	document.body.style.fontFamily = fontFamily;
	document.body.style.fontSize = fontSize;
}