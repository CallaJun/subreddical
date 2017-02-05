// Run when the browser action is loaded

// New activity captured from background.js

refreshPopup();

// Link button to clearActivity()
document.getElementById("clearButton").onclick = function() {clearActivity()};

// Refreshes the popup with reddit activity
function refreshPopup() {
  var otherWindows = chrome.extension.getBackgroundPage();
  var newActivity = otherWindows.passArrayToPopup();

  // Puts array into HTML list
  var ulist = "<ul>";
  for (var i = 0; i < newActivity.length; i++) {
    ulist += "<li>" + newActivity[i] + "</li>";
  }
  ulist += "</ul>";

  // Refresh data
  document.getElementById("redditActivity").innerHTML = ulist;
}

// Clears data
function clearActivity() {
  var otherWindows = chrome.extension.getBackgroundPage();
  otherWindows.clearActivity();
  refreshPopup();
}