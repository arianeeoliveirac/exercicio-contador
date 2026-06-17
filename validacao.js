const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const erro = document.getElementById("erro");

    if (nome === "") {
        erro.textContent = "O nome não pode estar vazio.";
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        erro.textContent = "O email deve conter @.";
        event.preventDefault();
        return;
    }

    if (idade <= 0) {
        erro.textContent = "A idade deve ser maior que 0.";
        event.preventDefault();
        return;
    }

    erro.textContent = "Formulário enviado com sucesso!";
});