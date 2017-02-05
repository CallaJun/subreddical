// This script is run when user is on reddit.com, as detected by match criteria in manifest.json

var url = window.location.href;
var current_time = new Date();

// Sends message to onreddit.js with current url and time
chrome.runtime.sendMessage(url + "," + current_time);