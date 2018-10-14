const config = {
    imageFolder: 'images',
    galleryItemClass: 'gallery-item',
    overlayItemClass: 'overlay-item',
    overlayItemImageClass: 'image',
    overlayItemAsideClass: 'aside'
};

let galleryData = {
    'photos': [
        {
          'src': 'fotka1.jpeg',
          'title': 'Názov fotky 1',
          'description': 'Dlhý popis obrázku 1'
        },
        {
          'src': 'fotka2.jpeg',
          'title': 'Názov fotky 2',
          'description': 'Dlhý popis obrázku 2'
        },
        {
          'src': 'fotka3.jpeg',
          'title': 'Názov fotky 3',
          'description': 'Dlhý popis obrázku 3'
        },
        {
          'src': 'fotka4.jpeg',
          'title': 'Názov fotky 3',
          'description': 'Dlhý popis obrázku 3'
        },
        {
          'src': 'fotka5.jpeg',
          'title': 'Názov fotky 3',
          'description': 'Dlhý popis obrázku 3'
        }
      ]
  };


  function showElement(element){
    element.style.display = "flex";
  }

  function createImage(title, src, klass){
    const image = document.createElement('IMG');
    image.title = title;
    image.classList.add(klass);
    image.src = src;
    return image;
  }

  function createAside(description){
    const aside = document.createElement('ASIDE');
    aside.dataset.description = description;
    aside.classList.add(config.overlayItemAsideClass);
    return aside;
  }

  function openImage(event){
    const sourceImage = event.srcElement;
    const overlay = document.querySelectorAll('.overlay')[0];
    const overlayItem = overlay.querySelectorAll('.overlay-item')[0];
    const image = createImage(
        sourceImage.title,
        sourceImage.src,
        config.overlayItemImageClass);
    const aside = createAside(sourceImage.dataset.description);
    overlayItem.appendChild(image);
    overlayItem.appendChild(aside);
    showElement(overlay);
  }

  function addDataSet(element){
    return element.description; 
  }

  function createGalleryImage(element){
    const image = createImage(
        element.title,
        `${config.imageFolder}/${element.src}`,
        config.galleryItemClass);
    image.dataset.description = addDataSet(element);
    image.addEventListener('click', openImage);

    return image;
  }

  function addImmages() {
    const gallery = document.querySelectorAll('.gallery')[0];
    const spacer = document.querySelectorAll('.spacer')[0];
    galleryData.photos.forEach(function(element) {
        const image = createGalleryImage(element);
        gallery.appendChild(image);
        gallery.insertBefore(image, spacer);
      });
  }

  function init() {
      addImmages();
  }

  window.onload = init;