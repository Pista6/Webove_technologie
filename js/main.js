const config = {
    imageFolder: 'images',
    galleryItemClass: 'gallery-item',
    overlayItemClass: 'overlay-item',
    overlayItemImageClass: 'image',
    overlayItemAsideClass: 'aside'
};

const galleryData = {
  'photos': [
    {
      'id':'1',
      'src': 'fotka1.jpeg',
      'title': 'Názov fotky 1',
      'description': 'Dlhý popis obrázku 1'
    },
    {
      'id':'2',
      'src': 'fotka2.jpeg',
      'title': 'Názov fotky 2',
      'description': 'Dlhý popis obrázku 2'
    },
    {
      'id':'3',
      'src': 'fotka3.jpeg',
      'title': 'Názov fotky 3',
      'description': 'Dlhý popis obrázku 3'
    },
    {
      'id':'4',
      'src': 'fotka4.jpeg',
      'title': 'Názov fotky 4',
      'description': 'Dlhý popis obrázku 4'
    },
    {
      'id':'5',
      'src': 'fotka5.jpeg',
      'title': 'Názov fotky 5',
      'description': 'Dlhý popis obrázku 5'
    }
  ]
};


  function showElement(element){
    element.style.display = "flex";
  }

  function showImage(nextSourceImg){
    const overlayItem = document.querySelector(".overlay-item");
    const nextImage = createImage(
      nextSourceImg.id, 
      nextSourceImg.title, 
      nextSourceImg.src, 
      config.overlayItemImageClass);
    const nextAside = createAside(nextSourceImg.dataset);

    overlayItem.appendChild(nextImage);
    overlayItem.appendChild(nextAside);
  }

  function previousImage(){
    const nextImgIntegerID = parseInt(document.querySelector("." + config.overlayItemImageClass).id.valueOf()) - 1;
    const nextImg = document.getElementById(nextImgIntegerID.toString());
    const overlayItem = document.querySelector(".overlay-item");
    clearOverlayItems(overlayItem);
    showImage(nextImg);
  }

  function nextImage(){
    const nextImgIntegerID = parseInt(document.querySelector("." + config.overlayItemImageClass).id.valueOf()) + 1;
    const nextImg = document.getElementById(nextImgIntegerID.toString());
    const overlayItem = document.querySelector(".overlay-item");
    clearOverlayItems(overlayItem);
    showImage(nextImg);
  }

  function clearOverlayItems(overlayItem){
    //debugger;
    const aside = document.querySelector("." + config.overlayItemAsideClass);
    const img = document.querySelector("." + config.overlayItemImageClass);
    overlayItem.removeChild(aside);
    overlayItem.removeChild(img);
  }

  function closeImage(){
    document.querySelectorAll(".overlay")[0].style.display = "none";
    const overlayItem = document.querySelector(".overlay-item");
    clearOverlayItems(overlayItem);
  }

  function createImage(id, title, src, klass){
    const image = document.createElement('IMG');
    image.id = id;
    image.title = title;
    image.classList.add(klass);
    image.src = src;
    return image;
  }

  function createAsideHeading(title){
    const heading = document.createElement('H2');
    heading.innerText = title;
    return heading;
  }

  function createAsideP(text){
    const p = document.createElement('p');
    p.innerText = text;
    return p;
  }

  function createAside(dataset){
    const asideHeading = createAsideHeading(dataset.title);
    const asideP = createAsideP(dataset.description);
    const aside = document.createElement('ASIDE');
    aside.dataset.id = dataset.id;
    aside.dataset.title = dataset.title;
    aside.dataset.description = dataset.description;
    aside.classList.add(config.overlayItemAsideClass);

    aside.appendChild(asideHeading);
    aside.appendChild(asideP);

    return aside;
  }

  function openImage(event){
    const sourceImage = event.srcElement;
    const overlay = document.querySelectorAll('.overlay')[0];
    const overlayItem = overlay.querySelectorAll('.overlay-item')[0];
    
    const image = createImage(
        sourceImage.id,
        sourceImage.title,
        sourceImage.src,
        config.overlayItemImageClass);
    const aside = createAside(sourceImage.dataset);

    overlayItem.appendChild(image);
    overlayItem.appendChild(aside);
    showElement(overlay);
  }

  function addDataSet(image, element){
    image.dataset.id = element.id;
    image.dataset.title = element.title;
    image.dataset.description = element.description;
  }

  function createGalleryImage(element){
    const image = createImage(
        element.id,
        element.title,
        `${config.imageFolder}/${element.src}`,
        config.galleryItemClass);
    addDataSet(image, element);
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