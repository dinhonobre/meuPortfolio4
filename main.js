
    // Seleciona o botão de alternância e o menu
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#9776;'; // Icone de menu hamburguer
    document.querySelector('.navbar').appendChild(toggleButton);

    const menu = document.querySelector('.menu');

    // Adiciona um listener de clique ao botão
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

