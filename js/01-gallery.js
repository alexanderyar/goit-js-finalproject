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

galleryParent.insertAdjacentHTML("beforeend", markup);

galleryParent.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  window.addEventListener("keydown", onKeydown);
  window.addEventListener;
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" class="gallery__image">
`,
    {
      onClose: () => {
        window.removeEventListener("keydown", onKeydown);
      },
    }
  );
  instance.show();

  function onKeydown(evt) {
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", onKeydown);
      instance.close();
    }
  }
}
