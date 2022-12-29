// Get the textbox and h3 elements
const textbox = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

// Add an event listener to the textbox that listens for changes
textbox.addEventListener('input', function() {
    
    if(evaluatedText.value === ""){
        wordCount.innerText = 0;
    }
    else{
        // Get the value of the textbox
        const text = textbox.value;

        // Split the text into an array of words
        const words = text.trim().split(' ');

        // Set the inner HTML of the h3 to the number of words
        wordCount.innerHTML = words.length;
    }
 
});
