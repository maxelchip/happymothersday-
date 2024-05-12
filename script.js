// script.js

// Function to update tab title
async function updateTabTitle(tabId, newTitle) {
    await chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: (newTitle) => {
        document.title = newTitle;
      },
      args: [newTitle]
    });
  }
  
  // Function to change title of all tabs
  async function changeTitleOfAllTabs(newTitle) {
    const tabs = await chrome.tabs.query({});
    tabs.forEach(tab => {
      updateTabTitle(tab.id, newTitle);
    });
  }
  
  // Change title of all current tabs
  changeTitleOfAllTabs("Happy Mother's Day!");
  
  // Listen for new tabs being created and change their title
  chrome.tabs.onCreated.addListener(function(tab) {
    updateTabTitle(tab.id, "Happy Mother's Day!");
  });
  