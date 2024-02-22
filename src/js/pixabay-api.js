`use strict`;
import { imgList } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// /iziToast

export const input = document.querySelector(`.input`);

export function fetchOn() {
  let correctInput = input.value.split(' ').join('+');

  const searchParams = new URLSearchParams({
    key: `42405110-7b28ad03e73a48ed950cc828f`,
    q: correctInput,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: `true`,
  });

  imgList.innerHTML = '';
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
