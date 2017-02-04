var reddit_activity = [];
// A script that runs when content page detects user is on reddit.com
chrome.runtime.onMessage.addListener(function(response, sender, send_response) {
	reddit_activity.push(response);
	alert(reddit_activity.length);
});

// Send reddit_activity to popup.js when requested