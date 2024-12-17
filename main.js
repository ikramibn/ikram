// Função chamada quando o botão "Enviar" é clicado
function handleSubmit() {
    // Captura os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verifica se todos os campos estão preenchidos
    if (name && email && message) {
        // Aqui você pode redirecionar ou processar os dados
        alert('Formulário enviado com sucesso!\n' + 
              'Nome: ' + name + '\n' + 
              'Email: ' + email + '\n' + 
              'Mensagem: ' + message);
        
        // Redireciona para outra página (Exemplo)
        // window.location.href = 'http://www.exemplo.com';

        // Ou se preferir, pode apenas limpar os campos ou realizar outras ações:
        document.getElementById('contactForm').reset(); // Limpa os campos do formulário
    } else {
        // Se algum campo estiver vazio, mostra um alerta
        alert('Por favor, preencha todos os campos.');
    }
}