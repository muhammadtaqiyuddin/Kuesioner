const passwordInput = document.getElementById('exampleInputPassword');
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
  }
});
