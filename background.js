var redditActivityArray = [];

// A script that runs when content page detects user is on reddit.com
chrome.runtime.onMessage.addListener(function(response, sender, send_response) {
	redditActivityArray.push(response);
	//alert(redditActivityArray.length);
});

// Clears redditActivityArray, its data onto popup
function passArrayToPopup() {
	var newRedditActivityArray = redditActivityArray;
	redditActivityArray = [];
	return newRedditActivityArray;
}