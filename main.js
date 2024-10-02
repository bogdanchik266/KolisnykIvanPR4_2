
const $btn = document.getElementById('btn-kick');


const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};


function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}


function renderHP(person) {
    renderHPlife(person);
    renderProgressbarHP(person);
}


function renderHPlife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}


function renderProgressbarHP(person) {
    const hpPercentage = (person.damageHP * 100 / person.defaultHP);
    person.elProgressbar.style.width = hpPercentage + '%';
    

    if (hpPercentage > 50) {
        person.elProgressbar.style.backgroundColor = 'green';
    } else if (hpPercentage > 20) {
        person.elProgressbar.style.backgroundColor = 'yellow';
    } else {
        person.elProgressbar.style.backgroundColor = 'red';
    }
}


function changeHP(count, person) {
    person.damageHP -= count;
    if (person.damageHP < 0) {
        person.damageHP = 0;
    }
    renderHP(person);
}


function random(num) {
    return Math.ceil(Math.random() * num);
}


$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function checkWinner() {
    if (character.damageHP === 0) {
        alert(enemy.name + ' wins!');
        $btn.disabled = true;
    } else if (enemy.damageHP === 0) {
        alert(character.name + ' wins!');
        $btn.disabled = true;
    }
}


$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
    checkWinner();
});

// Запуск гри
init();
