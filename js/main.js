const config = {
    imageFolder: 'images'
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

  function addImmages() {
    const gallery = document.querySelectorAll(".gallery")[0];
    galleryData.photos.forEach(function(element) {
        console.log(element);
        const image = document.createElement("IMG");
        image.src = config.imageFolder + '/' + element.src;
        image.title = element.title;
        gallery.appendChild(image);
      });
  }

  function init() {
      addImmages();
  }

  window.onload = init;