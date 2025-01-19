document.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('heart');
  const message = document.getElementById('message');

  // Array of love quotes
  const quotes = [
      "You make my heart smile!",
      "Love is not about possession, it's about appreciation.",
      "You are my today and all of my tomorrows.",
      "I love you to the moon and back.",
      "Together is a wonderful place to be."
  ];

  // Add click event listener to the heart
  heart.addEventListener('click', () => {
      // Add pulse effect to the heart
      heart.classList.add('pulse');

      // Change the message to a random quote with a smooth transition
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      message.style.opacity = '10'; // Fade out the current message

      // Change message after fade-out
      setTimeout(() => {
          message.textContent = randomQuote;
          message.style.opacity = '10'; // Fade in the new message
      }, 300); // Delay for the fade-out to complete

      // Reset the pulse effect after the animation completes
      setTimeout(() => {
          heart.classList.remove('pulse');
      }, 600); // Match the pulse animation duration
  });
});
