import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a> 
            </li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);

gallery.addEventListener('click', onGalleryClick);

new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
});

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.tagName === 'IMG' && event.target.closest('a')) {
  } else {
    event.preventDefault();
    return;
  }
}
