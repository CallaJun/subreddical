var redditActivityArray = [];
// A script that runs when content page detects user is on reddit.com
chrome.runtime.onMessage.addListener(function(response, sender, send_response) {
	redditActivityArray.push(response);
	alert(redditActivityArray.length);
});

// Send redditActivityArray to popup.js when requested
