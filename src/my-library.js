import onClickPlayer from './js/trailerplayer';
import apiService from './js/apiservice';
import {mask} from './js/loader';
import * as teamModal from './js/team-members';
import toggleModal from './js/modal';
import { paginationLocalStorage } from './js/paginationIn-library';
import localstorage from './js/service/localstorage';
import renderFilms from './js/renderfilms';
import theme from './js/theme';
import searchByName from './js/searchbyname';
import languageApi from './js/language-changer';
import {onGalleryReview, showBlankPage} from './js/service/blank-page'

paginationLocalStorage('watched');
onGalleryReview('watched');
const filmContainer = document.querySelector('.libary-gallery');
//  Вішаємо слухача і при click, запускаємо Відео
filmContainer.addEventListener('click', onClickPlayer);
// filmContainer.addEventListener('touchstart', onClickPlayer);

const buttons = document.querySelector('.header__buttons-library');
const btnQueue = document.querySelector('[data-add="queue"]');
const btnWatched = document.querySelector('[data-add="watched"]');

buttons.addEventListener('click', onClickBtnLibrary);

function onClickBtnLibrary(e) {
    const target = e.target;
    onGalleryReview(target.dataset.add);
    
    if (target === btnQueue) {
        if (!localstorage.load('queue')) {
            onClassActiveToggle(target);
            filmContainer.innerHTML='';
            return;
        } else {
            paginationLocalStorage('queue');
            onClassActiveToggle(target);
            return;
        };
    };

    if (target === btnWatched) {
        if (!localstorage.load('watched')) {
            onClassActiveToggle(target);
            filmContainer.innerHTML='';
            return;
        } else {
            paginationLocalStorage('watched');
            onClassActiveToggle(target);
            return;
        };
    };

};

function onClassActiveToggle(target) {
    if (target === btnQueue) {
        btnWatched.classList.remove('btn--active');
        btnQueue.classList.add('btn--active');
    } else {
        btnWatched.classList.add('btn--active');
        btnQueue.classList.remove('btn--active');
    };
};

