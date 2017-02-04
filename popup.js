chrome.storage.onChanged.addListener(function(changes, local)) {
  for (key in changes) {
    var storage_change = changes[key];
    alert(storage_change);
  }
}