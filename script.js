const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter valid email!");
    return;
  }

  // Button loading state
  btn.innerText = "Submitting...";
  btn.disabled = true;

  setTimeout(() => {
    // Save to localStorage
    const data = { name, email, message };
    localStorage.setItem("formData", JSON.stringify(data));

    // Show success message
    msg.innerText = "Form Submitted Successfully ✅";

    // Reset form
    form.reset();

    // Keep button disabled (shows submission done)
    btn.innerText = "Submitted ✔";

  }, 1000);
});