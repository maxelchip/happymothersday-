// script.js

// Function to update tab title
function updateTabTitle(tabId, newTitle) {
    chrome.tabs.executeScript(tabId, {
      code: 'document.title = "' + newTitle + '";'
    });
  }
  
  // Get all tabs and update their titles
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      updateTabTitle(tab.id, "Happy Mother's Day!");
    });
  });
  