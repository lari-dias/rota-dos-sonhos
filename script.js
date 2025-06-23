//validação nome, email e assunto do formulário de contato
function nameValidate() {
  const campoNome = document.getElementById("nome");
  const erroNome = document.getElementById("nome-error");

  if (campoNome.value.trim().length < 3) {
    campoNome.style.borderColor = "red";
    erroNome.textContent = "O seu nome é obrigatório!";
    erroNome.style.color = "red";
    erroNome.style.fontSize = "15px";
    return false;
  } else {
    campoNome.style.borderColor = "green";
    erroNome.textContent = "Validado com sucesso!";
    erroNome.style.color = "green";
    erroNome.style.fontSize = "15px";
    return true;
  }
}

function emailValidate() {
  const campoEmail = document.getElementById("email");
  const erroEmail = document.getElementById("email-error");

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(campoEmail.value.trim())) {
    campoEmail.style.borderColor = "red";
    erroEmail.textContent = "Digite um e-mail válido!";
    erroEmail.style.color = "red";
    erroEmail.style.fontSize = "15px";
    return false;
  } else {
    campoEmail.style.borderColor = "green";
    erroEmail.textContent = "Validado com sucesso!";
    erroEmail.style.color = "green";
    erroEmail.style.fontSize = "15px";
    return true;
  }
}

function subjectValidate() {
  const campoAssunto = document.getElementById("assunto");
  const erroAssunto = document.getElementById("assunto-error");

  if (campoAssunto.value.trim().length < 3) {
    campoAssunto.style.borderColor = "red";
    erroAssunto.textContent = "O assunto é obrigatório!";
    erroAssunto.style.color = "red";
    erroAssunto.style.fontSize = "15px";
    return false;
  } else {
    campoAssunto.style.borderColor = "green";
    erroAssunto.textContent = "Validado com sucesso!";
    erroAssunto.style.color = "green";
    erroAssunto.style.fontSize = "15px";
    return true;
  }
}
