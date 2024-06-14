document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const nationality = document.getElementById('nationality').value;
    const birthdate = document.getElementById('birthdate').value;
    const race = document.getElementById('race').value;
    const classType = document.getElementById('class').value;
    const height = document.getElementById('height').value;
    const religion = document.getElementById('religion').value;
    const personality = document.getElementById('personality').value;

    // Tratamento do arquivo de imagem
    const image = document.getElementById('image').files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageData = event.target.result;
        const character = {
            name,
            nationality,
            birthdate,
            race,
            classType,
            height,
            religion,
            image: imageData,
            personality
        };

        const editIndex = document.getElementById('edit-index').value;
        let characters = JSON.parse(localStorage.getItem('characters')) || [];

        if (editIndex) {
            // Atualiza o personagem existente
            characters[editIndex] = character;
        } else {
            // Adiciona um novo personagem
            characters.push(character);
        }

        localStorage.setItem('characters', JSON.stringify(characters));

        // Limpa o formulário
        document.getElementById('character-form').reset();

        // Exibe notificação de sucesso
        toastr.success('Personagem salvo com sucesso!');
    };
    reader.readAsDataURL(image);
});

document.getElementById('view-list').addEventListener('click', function() {
    window.location.href = 'list.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const editIndex = localStorage.getItem('editIndex');
    if (editIndex !== null) {
        const characters = JSON.parse(localStorage.getItem('characters'));
        const character = characters[editIndex];

        document.getElementById('name').value = character.name;
        document.getElementById('nationality').value = character.nationality;
        document.getElementById('birthdate').value = character.birthdate;
        document.getElementById('race').value = character.race;
        document.getElementById('class').value = character.classType;
        document.getElementById('height').value = character.height;
        document.getElementById('religion').value = character.religion;
        document.getElementById('personality').value = character.personality;
        document.getElementById('edit-index').value = editIndex;

        localStorage.removeItem('editIndex');
    }
});
