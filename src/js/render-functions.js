`use strict`;

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const imgList = document.querySelector(`.img-list`);

export function render(images) {
  const markup = images.hits
    .map(images => {
      return `<li class="list-item"><a href="${images.largeImageURL}" class="list-item-link">
      <img class="list-item-img" src="${images.webformatURL}" alt="${images.tags}"></a>
      <div class="list-item-description">
        <h2 class="description-name">Likes
          <p class="description-value">${images.likes}</p>
        </h2>
        <h2 class="description-name">Views 
          <p class="description-value">${images.views}</p>
        </h2>
        <h2 class="description-name">Comments 
          <p class="description-value">${images.comments}</p>
        </h2>
        <h2 class="description-name">Downloads 
          <p class="description-value">${images.downloads}</p>
        </h2>
      </div>
    </li>`;
    })
    .join(``);

  imgList.insertAdjacentHTML('beforeend', markup);
  const lightbox = new SimpleLightbox('.list-item a', {
    captionDelay: 250,
    captionSelector: 'img',
    captionsData: 'alt',
    scrollZoom: false,
    fadeSpeed: 1000,
  });
  lightbox.refresh();
}
