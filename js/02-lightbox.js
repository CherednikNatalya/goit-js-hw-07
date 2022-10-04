import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer =document.querySelector('.gallery');
const galleryMarkup = createGalleryRef(galleryItems)

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener('click', onContainerClick)


function createGalleryRef(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${preview}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`

})
.join('');
}

function onContainerClick (evt) {
evt.preventDefault();

if(evt.target.nodeName !== "IMG"){
    return;
}
console.log(evt.target);


const lightbox = new SimpleLightbox('.gallery a', {
	captionDelay: 250,
    captionsData:'alt',
});


galleryContainer.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        instance.close();
    }
})
}
