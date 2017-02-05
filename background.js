// Global var of reddit activity
var activity = [];

// A script that runs when content page detects user is on reddit.com
chrome.runtime.onMessage.addListener(function(response, sender, send_response) {
	activity.push(response);
	// Reset value in storage
	chrome.storage.local.set({'activity': activity});
});

// Clears activity when request received from popup
function clearActivity() {
	activity = [];
	// Reset value in storage
	chrome.storage.local.set({'activity': activity});
}