/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
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
            // add Event delete for films 
            const deleteFilms = document.querySelectorAll('.delete');
            deleteFilms.forEach((item, i) => {
                item.addEventListener('click', () => {
                    this.movies.splice(i, 1);
                    this.showFilms();
                })
            });
            this.addFormEvent();
        },
        addFormEvent() {
            const form = document.querySelector('form.add');
            const button = form.querySelector('button');
            const input = form.querySelector('input.adding__input');
            const checkBox = form.querySelector('[type="checkbox"]');

            button.addEventListener('click', (e) => {
                e.preventDefault();
                if (input.value) {
                    (input.value.length > 21) ? this.movies.push(input.value.toUpperCase().slice(0,21) + '...') : this.movies.push(input.value.toUpperCase());
                    
                    if (checkBox.checked) {
                        console.log('Добавляем любимый фильм!');
                    }
                    form.reset();
                    this.showFilms();
                }
            });
        }
    };

    movieDB.removeAdvard();
    movieDB.changeGenre();
    movieDB.changeBackground('../img/bg.jpg');
    movieDB.showFilms();

});