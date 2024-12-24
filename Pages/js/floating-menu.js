// Add this JavaScript to your scripts
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.querySelector('.main-button');
    const toolItems = document.querySelector('.tool-items');
    let isOpen = false;
  
    mainButton.addEventListener('click', function() {
      isOpen = !isOpen;
      mainButton.classList.toggle('open', isOpen);
      toolItems.classList.toggle('open', isOpen);
    });
  });