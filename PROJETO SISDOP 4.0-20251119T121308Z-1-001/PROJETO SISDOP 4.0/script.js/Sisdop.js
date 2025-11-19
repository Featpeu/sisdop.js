// Função de troca de telas
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// LOGIN GOOGLE
function handleCredentialResponse(response) {
  const data = JSON.parse(atob(response.credential.split('.')[1]));
  alert(`Bem-vindo, ${data.name}!`);
  showSection('menu');
}

// Animação de transição
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const loginBox = document.getElementById('loginBox');

  setTimeout(() => {
    splash.classList.add('fade-out');

    setTimeout(() => {
      splash.style.display = 'none';
      loginBox.classList.add('show');
    }, 1000);

  }, 3500);
});

