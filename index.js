function trackUserBehavior(htmlTemplate, timeInSeconds) {
  // Create a container for the modal
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = htmlTemplate;

  // Function to show the modal
  function showModal() {
    const modal = modalContainer.querySelector(".modal");
    modal.style.display = "block";
  }

  // Show the modal when the user moves the mouse upwards or spends more than the specified time
  let isMovingUp = false;
  let timeSpent = 0;
  const timeInMillis = timeInSeconds * 1000; // Convert time to milliseconds

  function checkShowModal() {
    if (isMovingUp || timeSpent >= timeInMillis) {
      showModal();
    }
  }

  window.addEventListener("mousemove", (event) => {
    const currentY = event.clientY;
    if (currentY < 50) {
      isMovingUp = true;
      showModal();
    }
  });

  const timer = setInterval(() => {
    timeSpent += 1000; // Increment by 1 second
    checkShowModal();
  }, 1000); // Run every 1 second

  // Show the modal when the user attempts to close the browser
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault(); // Prevent closing the browser immediately
    showModal();
  });

  // Clear the timer when the form is submitted (modal shown)
  const contactForm = modalContainer.querySelector("#contactForm");
  contactForm.addEventListener("submit", () => {
    clearInterval(timer);
  });

  // Append the modal container to the document body
  document.body.appendChild(modalContainer);
}
