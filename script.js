document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const nationality = document.getElementById('nationality').value;
    const birthdate = document.getElementById('birthdate').value;
    const race = document.getElementById('race').value;
    const characterClass = document.getElementById('class').value;
    const height = document.getElementById('height').value;
    const religion = document.getElementById('religion').value;

    const character = {
        name,
        nationality,
        birthdate,
        race,
        characterClass,
        height,
        religion
    };

    saveCharacter(character);

    document.getElementById('character-form').reset();
});

document.getElementById('view-list').addEventListener('click', function() {
    window.location.href = 'list.html';
});

function saveCharacter(character) {
    let characters = JSON.parse(localStorage.getItem('characters')) || [];
    characters.push(character);
    localStorage.setItem('characters', JSON.stringify(characters));
}
