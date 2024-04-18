function addingEventListener() {
    // Select the input element with the ID 'button'
    const input = document.getElementById('button');
  
    // Define the function that will be called when the event is triggered
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener for the 'click' event on the input element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to bind the event listener
  addingEventListener();
  