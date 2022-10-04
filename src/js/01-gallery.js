import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer =document.querySelector('.gallery');
const galleryMarkup = createGalleryRef(galleryItems)

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener('click', onContainerClick)


function createGalleryRef(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery-item">
    <a class="gallery-link" href ="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      data-source="${original}"
      ></a>
  </div>`;
})
.join('');
}

function onContainerClick (evt) {
evt.preventDefault();

if(evt.target.nodeName !== "IMG"){
    return;
}
console.log(evt.target);

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()


galleryContainer.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        instance.close();
    }
})
}











