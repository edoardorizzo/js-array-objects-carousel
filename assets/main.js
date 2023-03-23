const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let activeImage = 0;

/*
1 - Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

2 - Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
*/

const imagesElement = document.querySelector('.slide > .images');
const titleElement = document.querySelector('.slide > .images');
for (let i = 0; i < images.length; i++){
    const imgSrc = images[i];
    const imgElement = `<img class="title-img position-relative" src="./assets/${imgSrc.image}" alt="">`
    //const ttlElement = `<h3 class="position-absolute" >${imgSrc.title}</h3>`
    
    //titleElement.insertAdjacentHTML('beforeend', ttlElement);
    imagesElement.insertAdjacentHTML('beforeend', imgElement);
}

const firstImg = document.querySelector('img');
firstImg.classList.add('active');

/*
3 - Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
*/  
const rightBtn = document.getElementById('right_btn');
rightBtn.addEventListener('click', function(){
    // select all slide
    const slideImagesElements = document.querySelectorAll('.slide > .images > img');
    console.log(slideImagesElements);
  
    //select the current slide
    const currentSlide = slideImagesElements[activeImage];
  
    //remove the active class from the active image
    currentSlide.classList.remove('active');
  
    //increment the value of the active image variable
    activeImage++ //increment the value of activeImage of 1 every time we click on the next button
  
    //check if the activeImage index exceeds the number of images available
    if(activeImage >= images.length) {
          activeImage = 0; //set the index to 0 to start from the beginning
    }
  
    //select the next slide
    const nextImage = slideImagesElements[activeImage];
  
    //add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
})


const leftBtn = document.getElementById('left_btn');
leftBtn.addEventListener('click', function(){
    // select all slide
    const slideImagesElements = document.querySelectorAll('.slide > .images > img');
    console.log(slideImagesElements);

    //select the current slide
    const currentSlide = slideImagesElements[activeImage];
    console.log(currentSlide);

    //remove the active class from the active image
    currentSlide.classList.remove('active');

    //increment the value of the active image variable
    activeImage-- //decrement the value of activeImage of 1 every time we click on the next button

    if(activeImage < 0) {
        activeImage = images.length - 1;
    }

    //select the next slide
    const nextImage = slideImagesElements[activeImage];

    //add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
})

/**
4 - Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
 */