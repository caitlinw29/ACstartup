const loginForm2 = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-email2").value.trim();
  const password = document.querySelector("#user-password2").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/home");
    } else {
      alert("Incorrect email or password.");
    }
  }
};

document.querySelector("#login-button2").addEventListener("click", loginForm2);
