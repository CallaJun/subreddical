// Run when the browser action is loaded

// Request reddit_activity from onreddit.js (will it have to be persistent?)
// Somehow store reddit_activity. Download when requested.

var redditActivityDiv = document.getElementById("redditActivity");
redditActivityDiv.innerHTML = "Goodbye";
// Update the redditActivityDiv with redditActivityArray, from background.js