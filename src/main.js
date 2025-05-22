import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  formElem: document.querySelector('.form'),
  galleryElem: document.querySelector('.gallery'),
};

// =============== основний код =================

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();

  const query = e.target.elements['search-text'].value.trim();

  if (query !== '') {
    clearGallery();
    getImagesByQuery(query).then(data => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
        hideLoader();
      } else {
        hideLoader();
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          maxWidth: '432px',
          messageColor: '#ffffff',
          close: true,
          closeOnClick: true,
          icon: 'icon-error',
        });

        refs.galleryElem.innerHTML = '';
      }
    });
  }

  e.target.reset();
});
