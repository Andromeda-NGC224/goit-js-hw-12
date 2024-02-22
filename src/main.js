`use strict`;

import { input, fetchOn } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// /iziToast

const form = document.querySelector(`.form`);
export const btnLoad = document.querySelector(`.btn-load`);
export const loader = document.querySelector('.loader');

export let page = 1;
export let limit = 15;
const totalPages = Math.ceil(100 / limit);

form.addEventListener(`submit`, formSearch);

async function formSearch(event) {
  const inputTrim = input.value.trim();
  if (inputTrim === ``) {
    event.preventDefault();
    form.reset();
    return;
  }
  event.preventDefault();

  try {
    const posts = await fetchOn();
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
  } catch (error) {
    console.log(error);
  }

  form.reset();
}

btnLoad.addEventListener(`click`, loadMore);

async function loadMore() {
  page += 1;
  if (page > totalPages) {
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
    btnLoad.classList.add('hidden');
    return;
  }
  await fetchOn();
  render(posts);
}
