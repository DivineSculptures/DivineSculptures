const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const enlargedImageContainer = document.querySelector('.enlarged-image');
    const enlargedImage = document.createElement('img');

    galleryImages.forEach((img) => {
      img.addEventListener('click', () => {
        enlargedImage.src = img.src;
        enlargedImageContainer.style.display = 'flex';
      });
    });

    enlargedImageContainer.addEventListener('click', () => {
      enlargedImageContainer.style.display = 'none';
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const navList = document.querySelector("ul");
  
    mobileMenuIcon.addEventListener("click", function () {
      navList.classList.toggle("show-menu");
    });
  });
  