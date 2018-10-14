const config = {
    imageFolder: 'images',
    galleryItemClass: 'gallery-item'
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

  function openImage(event){
    console.log(...arguments);
    console.log(event.srcElement.dataset.description);
    const overlay = document.querySelectorAll('.overlay')[0];
    showElement(overlay);
  }

  function addDataSet(element){
    return element.description; 
  }

  function createGalleryImage(element){
    const image = document.createElement('IMG');
    image.dataset.description = addDataSet(element);
    image.title = element.title;
    image.classList.add(config.galleryItemClass);
    image.src = `${config.imageFolder}/${element.src}`;
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