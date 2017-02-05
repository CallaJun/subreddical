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
  // Download CSV
  chrome.storage.local.get('activity', function(data) {
      var result = JSON.stringify(data);

      // Save as file
      var url = 'data:application/json;base64,' + btoa(result);
      chrome.downloads.download({
          url: url,
          filename: 'subreddical_activity.json'
      });
  });

  chrome.extension.getBackgroundPage().clearActivity();
  refreshPopup();
}