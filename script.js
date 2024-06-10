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

        // Salva o personagem no localStorage
        const characters = JSON.parse(localStorage.getItem('characters')) || [];
        characters.push(character);
        localStorage.setItem('characters', JSON.stringify(characters));

        // Limpa o formulário
        document.getElementById('character-form').reset();

        // Exibe notificação de sucesso
        toastr.success('Personagem cadastrado com sucesso!');
    };
    reader.readAsDataURL(image);
});

document.getElementById('view-list').addEventListener('click', function() {
    window.location.href = 'list.html';
});
