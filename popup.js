// Run when the browser action is loaded

// New activity captured from background.js
var otherWindows = chrome.extension.getBackgroundPage();
var newActivity = otherWindows.passArrayToPopup();

// TODO: Place newActivity into storage. Display storage in innerHTML.
/* Alternatively, keep global var in background. When popup run,
pull it. When clear button hit, send request to background to clear global
var.
*/

// Stick array into unordered HTML list
var ulist = "<ul>";
for (var i = 0; i < newActivity.length; i++) {
  ulist += "<li>" + newActivity[i] + "</li>";
}
ulist += "</ul>";

document.getElementById("redditActivity").innerHTML = ulist;