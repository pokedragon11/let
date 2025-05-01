
function checkPassword() {
  const password = document.getElementById('password-input').value;
  const correct = "pineapples";
  if (password.toLowerCase() === correct) {
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('letter-screen').style.display = 'block';
  } else {
    document.getElementById('error-message').innerText = "Wrong password, try again.";
  }
}
