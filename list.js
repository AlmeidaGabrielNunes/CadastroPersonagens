document.addEventListener('DOMContentLoaded', (event) => {
    loadCharacters();
});

document.getElementById('back-to-form').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function loadCharacters() {
    let characters = JSON.parse(localStorage.getItem('characters')) || [];
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = ''; // Clear the list before adding characters

    characters.forEach((character, index) => {
        const characterItem = document.createElement('div');
        characterItem.className = 'character-item';

        characterItem.innerHTML = `
            <p><strong>Nome:</strong> ${character.name}</p>
            <p><strong>Nacionalidade:</strong> ${character.nationality}</p>
            <p><strong>Data de Nascimento:</strong> ${character.birthdate}</p>
            <p><strong>Raça:</strong> ${character.race}</p>
            <p><strong>Classe:</strong> ${character.characterClass}</p>
            <p><strong>Altura:</strong> ${character.height}</p>
            <p><strong>Religião:</strong> ${character.religion}</p>
            <button onclick="removeCharacter(${index})">Remover</button>
        `;

        characterList.appendChild(characterItem);
    });
}

function removeCharacter(index) {
    let characters = JSON.parse(localStorage.getItem('characters')) || [];
    if (characters[index]) {
        characters.splice(index, 1);
        localStorage.setItem('characters', JSON.stringify(characters));
        loadCharacters();
        alert("Personagem removido com sucesso!");
    } else {
        alert("Operação falhou. Personagem não encontrado.");
    }
}

