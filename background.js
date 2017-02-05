// Global var of reddit activity
var activity = [];

// A script that runs when content page detects user is on reddit.com
chrome.runtime.onMessage.addListener(function(response, sender, send_response) {
	activity.push(response);
});

// Passes redditActivityArray to popup
function passArrayToPopup() {
	return activity;
}

// Clears activity when request received from popup
function clearActivity() {
	activity = [];
}