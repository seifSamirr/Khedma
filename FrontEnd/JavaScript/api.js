async function handleLogin(email, password) {
  const result = await mockApi.login(email, password);
  if (result.success) {
    localStorage.setItem("token", result.token);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert(result.message);
  }
}
