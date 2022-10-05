import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer =document.querySelector('.gallery');

const galleryMarkup = createGalleryRef(galleryItems)

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener('click', onContainerClick)


function createGalleryRef(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}""
      />
    </a>
  </div>`;

})
.join('');
}

function onContainerClick (evt) {
evt.preventDefault();

if(evt.target.nodeName !== "IMG"){
    return;
}

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,

{
    onShow: (instance) => {window.addEventListener('keydown', closeKeyDownEsc)},
    onClose: (instance) => {window.removeEventListener('keydown', closeKeyDownEsc)},
}
)

instance.show()
function closeKeyDownEsc(event) {
    if (event.code === 'Escape') {
                instance.close();
            }
}

}




