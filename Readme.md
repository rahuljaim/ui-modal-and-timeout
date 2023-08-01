**The trackUserBehavior function takes two arguments:**

**htmlTemplate**: A string containing the HTML template for the modal.
**timeInSeconds**: The time in seconds after which the modal should appear if the user hasn't triggered it by moving the mouse upward.
The function creates a modal using the provided HTML template and attaches event listeners to track user behavior. The modal will be displayed as soon as the user moves the mouse towards the top of the page or when the specified time has passed.

The example usage at the end demonstrates how to use the trackUserBehavior function with a custom HTML template and a time of 10 seconds. You can modify the htmlTemplate and timeInSeconds variables to suit your specific needs.

// Example usage:
const htmlTemplate = `

  <div class="modal">
    <h2>Provide your Email and Phone Number</h2>
    <form id="contactForm">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
`;

const timeInSeconds = 10; // Replace with the desired time in seconds
trackUserBehavior(htmlTemplate, timeInSeconds);
