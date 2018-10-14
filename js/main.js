const config = {
    imageFolder: 'images',
    galleryItemClass: 'gallery-item',
    overlayItemClass: 'overlay-item'
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
    element.style.display = "block";
  }

  function createImage(title, src, klass){
    const image = document.createElement('IMG');
    image.title = title;
    image.classList.add(klass);
    image.src = src;
    return image;
  }

  function openImage(event){
    const overlay = document.querySelectorAll('.overlay')[0];
    const overlayItem = overlay.querySelectorAll('.overlay-item')[0];
    const image = createImage(
        event.srcElement.title,
        event.srcElement.src,
        config.overlayItemClass);
    overlayItem.appendChild(image);
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
    //image.dataset.description = addDataSet(element);
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