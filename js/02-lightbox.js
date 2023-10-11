import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryParent = document.querySelector(".gallery");

function galleryMarkupCreator(picsArray) {
  const markupItself = picsArray.map(({ preview, original, description }) => {
    return `
        <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image ${description}" />
</a></li>
       `;
  });

  return markupItself.join("");
}

const markup = galleryMarkupCreator(galleryItems);

console.log(markup);

galleryParent.insertAdjacentHTML("beforeend", markup);

//  (function() {
const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// })();
