//form to create a user
const signupForm = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const rePassword = document.querySelector("#password-reenter").value.trim();

  if (password.length < 8 || password.length > 30) {
    alert("Password should be between 8 and 30 characters");
    document.location.replace;
    return false;
  }

  if (password !== rePassword) {
    alert("Passwords do not match! Please re-enter your password");
    document.location.replace;
    return false;
  }

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert("Account already exists for this email!");
    }
  }
};

document.querySelector("#signup-form").addEventListener("submit", signupForm);
