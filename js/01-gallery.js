import { galleryItems } from "./gallery-items.js";

const galleryParent = document.querySelector(".gallery");

function galleryMarkupCreator(picsArray) {
  const markupItself = picsArray.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
           
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
  });

  return markupItself.join("");
}

const markup = galleryMarkupCreator(galleryItems);

console.log(markup);

galleryParent.insertAdjacentHTML("beforeend", markup);

galleryParent.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  console.log(evt.target.dataset);
  if (!evt.target.classList.contains("gallery__image")) {
    console.log("мимо");
    return;
  }

  window.addEventListener("keydown", onKeydown);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" class="gallery__image">
`);
  instance.show();

  function onKeydown(evt) {
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", onKeydown);
      instance.close();
    }
    console.log(evt);
  }
}
