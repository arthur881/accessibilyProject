
let imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
let currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

let selectableItems = document.querySelectorAll('.selectable');
let tabs = document.querySelectorAll('.tab');
let tabsContent = document.querySelectorAll('.tab-content');

let selectedItems;

let currentIndex = 0;

function changeSlide(n) {
  for (let i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = n;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}



function updateSelection() {
  selectableItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active1');
    } else {
      item.classList.remove('active1');
    }
  });
}
// function showTab(dataTabId) {
//   tabsContent.forEach((tabContent) => {
//     if (tabContent.getAttribute('data-tab') === dataTabId) {
//       tabContent.classList.add('tab-content-active');
//     } else {
//       tabContent.classList.remove('tab-content-active');
//     }
//   });
// }


document.addEventListener('keydown', function(event) {
  switch (event.code) {
    case 'ArrowRight': // touche pour passer à l'item suivant
      currentIndex = (currentIndex + 1) % selectableItems.length;
      break;
    case 'ArrowLeft': // touche retour
      currentIndex = (currentIndex - 1 + selectableItems.length) % selectableItems.length;
      break;
    case 'Enter': // touche pour valider la selection
      selectedItems = selectableItems[currentIndex];
      if (selectedItems.classList.contains('isDrop')) {
        // let dropDownContent = document.querySelector('.dropdown-content');
        let dropDownContent = selectedItems.nextElementSibling;
        console.log(dropDownContent);
        let dropDownChidld = document.querySelectorAll('.dropChild');
        dropDownChidld.forEach((child) => {
          child.classList.add('selectable');
        });

        selectableItems = document.querySelectorAll('.selectable');
        dropDownContent.style.display = 'block';
      } else {
        window.location.href = selectedItems.href;
      }
      //isLiHasDropdown(selectableItems[currentIndex]);

      break;
  }
  updateSelection();
});

updateSelection();