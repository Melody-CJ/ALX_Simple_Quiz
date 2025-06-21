// Step 1: Define the checkAnswer function
function checkAnswer() {
  // Step 2: Set the correct answer
  const correctAnswer = "4";

  // Step 3: Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if an option is selected
  if (selectedOption) {
    const userAnswer = selectedOption.value;

    // Step 4: Compare user's answer to the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "#28a745"; // Optional: green for correct
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "#dc3545"; // Optional: red for wrong
    }
  } else {
    // No option selected
    document.getElementById("feedback").textContent = "Please select an answer.";
    document.getElementById("feedback").style.color = "#ffc107"; // Optional: yellow
  }
}

// Step 5: Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

