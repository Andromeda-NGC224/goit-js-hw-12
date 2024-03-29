`use strict`;

import { input, fetchOn } from './js/pixabay-api';
import { render, imgList } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// /iziToast

const form = document.querySelector(`.form`);
const imgCard = document.querySelector(`.list-item`);
export const btnLoad = document.querySelector(`.btn-load`);
export const loader = document.querySelector('.loader');

export let page = 1;
export let limit = 15;
let posts;

form.addEventListener(`submit`, formSearch);

async function formSearch(event) {
  page = 1;
  const inputTrim = input.value.trim();
  if (inputTrim === ``) {
    event.preventDefault();
    form.reset();
    return;
  }
  event.preventDefault();
  clearImgList();

  try {
    posts = await fetchOn();
    render(posts);
    loader.classList.remove('hidden');
    btnLoad.classList.remove('hidden');
    if (posts.hits.length === 0) {
      btnLoad.classList.add('hidden');
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1200);

    return;
  } catch (error) {
    console.log(error);
  }
}

btnLoad.addEventListener(`click`, loadMore);

async function loadMore(event) {
  event.preventDefault();
  page += 1;

  posts = await fetchOn();
  render(posts);

  ScrollBy(820);

  if (posts.hits.length === 0) {
    btnLoad.classList.add('hidden');
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });

    return;
  }
  return;
}

function clearImgList() {
  imgList.innerHTML = '';
}

function ScrollBy(distance) {
  window.scrollBy({
    top: distance,
    left: 0,
    behavior: 'smooth',
  });
}
