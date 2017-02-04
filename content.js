var url = window.location.href;
var current_time = new Date();

// This script is run when user is on reddit.com, as detected by match criteria in manifest.json
// Sends message to onreddit.js with current url and time
chrome.runtime.sendMessage("Visited \"" + url + "\" at " + current_time);