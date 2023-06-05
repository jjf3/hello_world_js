function helloWorldBox() {
    var message = "Hello, World!";
    var messageLength = message.length;
    
    var horizontalBorder = "*".repeat(messageLength + 4); // Create a horizontal border
    
    console.log(horizontalBorder);
    console.log("* " + message + " *"); // Print the message with vertical borders
    console.log(horizontalBorder);
  }
  
  helloWorldBox(); // Call the function to display the "Hello, World!" message in a box