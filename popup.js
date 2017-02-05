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
      var csvData = "";
      for (var i = 0; i < data.activity.length; i++) {
        csvData += data.activity[i] + ","; // Replace comma with actual row delimiter
      }
      console.log(csvData);
      var link = document.createElement("a");
      link.download = "file.csv";
      link.href = "data:text/csv," + csvData;
      document.body.appendChild(link);
      link.click();
  });
  // Clear activity
  chrome.extension.getBackgroundPage().clearActivity();
  refreshPopup();
}