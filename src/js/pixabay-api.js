`use strict`;
import { imgList } from './render-functions.js';
import { page, limit } from '../main.js';
import axios from 'axios';

export const input = document.querySelector(`.input`);

export async function fetchOn() {
  let correctInput = input.value.split(' ').join('+');

  const searchParams = new URLSearchParams({
    key: `42405110-7b28ad03e73a48ed950cc828f`,
    q: correctInput,
    image_type: `photo`,
    orientation: `horizontal`,
    per_page: limit,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return response.data;
}
