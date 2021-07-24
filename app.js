const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryListEl = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlayClickModalClose = document.querySelector('.lightbox__overlay');
const modalIsOpenImg = document.querySelector('.lightbox__image')




const elements = galleryItems.map((image, index) => {
  
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      data-index="${index}"
    />
  </a>
</li>`
});

galleryListEl.insertAdjacentHTML(
  "beforeend",
  `${elements.join('')}`);
  
galleryListEl.addEventListener('click', modalOpen);

function modalOpen(event) {
    event.preventDefault();
  if (event.target.nodeName !== "IMG"){
    return;
  }
 modalIsOpen(event);
};

function modalIsOpen(event) {
  modalToggle();
  modalIsOpenImg.src = event.target.dataset.source;
  modalIsOpenImg.alt = event.target.alt;
  console.log(event.target.dataset.index);
  document.addEventListener('keyup', arrowListener)
}

function modalToggle(){
modal.classList.toggle('is-open')
};


function arrowListener (event){

 
  
if(event.key !== 'ArrowRight') {
  return;
}

 
if(event.key !== 'ArrowLeft') {
  return;
}



}



 










overlayClickModalClose.addEventListener('click', modalIsClose);
modalCloseBtn.addEventListener("click", modalIsClose);
window.addEventListener('keyup', closeModalOnESC);

function modalIsClose (){
  modalToggle();
  modalIsOpenImg.src = '';
}

function closeModalOnESC(event) {
  if (event.key !== 'Escape'){
    return;
  };
  modalIsClose ();
};