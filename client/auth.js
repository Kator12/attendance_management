document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");
  const dashboardContainer = document.getElementById("dashboardContainer");
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      // Send login request to backend
      const response = await axios.post("/login", { username, password });

      // Redirect to index page on successful login
      if (response.data.success) {
        window.location.href = "/"; // Redirect to index page
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  });

  logoutBtn.addEventListener("click", function () {
    // Logout logic
    hideDashboard();
  });

  function displayDashboard() {
    dashboardContainer.classList.remove("hidden");
  }

  function hideDashboard() {
    dashboardContainer.classList.add("hidden");
  }

  function clearLoginForm() {
    usernameInput.value = "";
    passwordInput.value = "";
  }
});
