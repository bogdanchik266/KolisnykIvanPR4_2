// Отримуємо посилання на кнопку
const $btn = document.getElementById('btn-kick');

// Об'єкти персонажів
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

// Ініціалізація гри
function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

// Функція для оновлення відображення HP
function renderHP(person) {
    renderHPlife(person);
    renderProgressbarHP(person);
}

// Оновлює текст HP
function renderHPlife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

// Оновлює прогресбар HP і змінює його колір залежно від рівня HP
function renderProgressbarHP(person) {
    const hpPercentage = (person.damageHP * 100 / person.defaultHP);
    person.elProgressbar.style.width = hpPercentage + '%';
    
    // Зміна кольору прогресбару в залежності від рівня HP
    if (hpPercentage > 50) {
        person.elProgressbar.style.backgroundColor = 'green';
    } else if (hpPercentage > 20) {
        person.elProgressbar.style.backgroundColor = 'yellow';
    } else {
        person.elProgressbar.style.backgroundColor = 'red';
    }
}

// Функція зміни HP з перевіркою на мінімум 0
function changeHP(count, person) {
    person.damageHP -= count;
    if (person.damageHP < 0) {
        person.damageHP = 0;
    }
    renderHP(person);
}

// Генератор випадкових чисел
function random(num) {
    return Math.ceil(Math.random() * num);
}

// Додаємо слухач подій на кнопку
$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});
// Перевірка перемоги або поразки
function checkWinner() {
    if (character.damageHP === 0) {
        alert(enemy.name + ' wins!');
        $btn.disabled = true;
    } else if (enemy.damageHP === 0) {
        alert(character.name + ' wins!');
        $btn.disabled = true;
    }
}

// Оновлюємо слухач на кнопці "Удар"
$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
    checkWinner();
});

// Запуск гри
init();
