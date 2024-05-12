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