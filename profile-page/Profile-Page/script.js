console.log("Profile page script loaded successfully!");

// Only run DOM code if we are inside a web browser
if (typeof document !== "undefined") {
  const greetButton = document.getElementById("greet-btn");
  const greetingMessage = document.getElementById("greeting-message");

  if (greetButton) {
    greetButton.addEventListener("click", () => {
      greetingMessage.textContent = "Hello! Thanks for visiting my profile.";
    });
  }
}
