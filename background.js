// background.js

// Listen for tab creation events
chrome.tabs.onCreated.addListener(function(tab) {
    // Send a message to content scripts to update title
    chrome.tabs.sendMessage(tab.id, { action: "updateTitle", title: "Happy Mother's Day!" });
  });
  