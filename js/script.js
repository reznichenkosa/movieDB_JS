/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "New film"
    ],
    removeAdvard() {
        const advItems = document.querySelectorAll('.promo__adv img');
        advItems.forEach(item => {
            item.remove();
        });
    },
    changeGenre() {
        const genre = document.querySelector('.promo__bg .promo__genre');
        genre.textContent = 'Драма';
    },
    changeBackground(url) {
        const promoBackground = document.querySelector('.promo__bg');
        console.log(promoBackground);
        promoBackground.style.background = `url("${url}")`;
    },
    showFilms() {
        const listFilms = document.querySelector('.promo__interactive-list');
        listFilms.innerHTML = '';

        this.movies.sort();
        this.movies.forEach((item, i) => {
            listFilms.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>`;
        });
    },
};

movieDB.removeAdvard();
movieDB.changeGenre();
movieDB.changeBackground('../img/bg.jpg');
movieDB.showFilms();