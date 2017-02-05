// Run when the browser action is loaded

// New activity captured from background.js
refreshPopup();

// Link button to clearActivity()
document.getElementById("clearButton").onclick = function() {clearActivity()};

// Refreshes the popup with reddit activity
function refreshPopup() {
  chrome.storage.local.get('activity', function(data) {
    document.getElementById("redditActivity").innerHTML = data.activity;
  });
}

// Clears data
function clearActivity() {
  chrome.extension.getBackgroundPage().clearActivity();
  refreshPopup();
}