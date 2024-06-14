document.addEventListener('DOMContentLoaded', function() {
    const characters = JSON.parse(localStorage.getItem('characters')) || [];
    const characterList = document.getElementById('character-list');

    characters.forEach((character, index) => {
        const characterItem = document.createElement('div');
        characterItem.className = 'list-group-item';

        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterImage.alt = `${character.name} - Imagem`;
        characterImage.className = 'img-thumbnail me-3';
        characterImage.style.width = '100px';
        characterImage.style.height = '100px';

        const characterInfo = document.createElement('div');
        characterInfo.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Nacionalidade:</strong> ${character.nationality}</p>
            <p><strong>Data de Nascimento:</strong> ${character.birthdate}</p>
            <p><strong>Raça:</strong> ${character.race}</p>
            <p><strong>Classe:</strong> ${character.classType}</p>
            <p><strong>Altura:</strong> ${character.height}</p>
            <p><strong>Religião:</strong> ${character.religion}</p>
            <p><strong>Personalidade:</strong> ${character.personality}</p>
            <button class="btn btn-warning btn-edit" data-index="${index}">Editar</button>
            <button class="btn btn-danger btn-delete" data-index="${index}">Excluir</button>
        `;

        const characterDetails = document.createElement('div');
        characterDetails.className = 'd-flex align-items-start';
        characterDetails.appendChild(characterImage);
        characterDetails.appendChild(characterInfo);

        characterItem.appendChild(characterDetails);
        characterList.appendChild(characterItem);
    });

    document.getElementById('back-to-form').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Adiciona o evento de clique para os botões de editar
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            localStorage.setItem('editIndex', index);
            window.location.href = 'index.html';
        });
    });

    // Adiciona o evento de clique para os botões de excluir
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            characters.splice(index, 1);
            localStorage.setItem('characters', JSON.stringify(characters));
            toastr.success('Personagem excluído com sucesso!');
            location.reload();
        });
    });

    // Configuração do Toastr
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
});
