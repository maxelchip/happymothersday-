// content.js

// Function to update tab title
function updateTabTitle(tabId, newTitle) {
    chrome.tabs.executeScript(tabId, {
      code: 'document.title = "' + newTitle + '";'
    });
  }
  
  // Function to change title of all tabs
  function changeTitleOfAllTabs(newTitle) {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        updateTabTitle(tab.id, newTitle);
      });
    });
  }
  
  // Change title of all current tabs
  changeTitleOfAllTabs("Happy Mother's Day!");
  
  // Listen for new tabs being created and change their title
  chrome.tabs.onCreated.addListener(function(tab) {
    updateTabTitle(tab.id, "Happy Mother's Day!");
  });
  