import { galleryItems } from "./gallery-items.js";

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

galleryParent.insertAdjacentHTML("beforeend", markup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
