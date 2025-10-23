document.querySelector("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  await handleLogin(email, password);
});
