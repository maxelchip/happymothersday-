// popup.js
document.addEventListener('DOMContentLoaded', function() {
    var textElement = document.getElementById('colorText');
  
    // Function to generate a random color
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Function to change text color
    function changeColor() {
      var color = getRandomColor();
      textElement.style.color = color;
    }
  
    // Change color on load
    changeColor();
  
    // Change color periodically
    setInterval(changeColor, 500); // Change color every 2 seconds
  });


// popup.js
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

  