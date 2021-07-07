//AOS
const fadeDown = document.querySelectorAll('.items .fadeDown');
fadeDown.forEach((item, i) => {
  item.dataset.aos = 'fade-down';
  item.dataset.aosDelay = i * 25;
  item.dataset.aosDuration = 800;
});
AOS.init({
  once: true,
});

// GSAP
gsap.from('.header-title .logo', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.header-title a', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });

// Vanilla JavaScript
const item4 = document.querySelector('.items.empat');

item4.addEventListener('mousemove', function (e) {
  let img = document.querySelectorAll('.link img');
  let link = document.querySelectorAll('.link a');
  for (let a = 0; a < link.length; a++) {
    for (let i = 0; i < img.length; i++) {
      if (e.target == link[0] || e.target == img[0]) {
        img[0].setAttribute('src', 'images/icon-facebook-dark.svg');
      } else if (e.target == link[1] || e.target == img[1]) {
        img[1].setAttribute('src', 'images/icon-twitter-dark.svg');
      } else if (e.target == link[2] || e.target == img[2]) {
        img[2].setAttribute('src', 'images/icon-instagram-dark.svg');
      }
    }
  }
});

item4.addEventListener('mouseout', function (even) {
  let img = document.querySelectorAll('.link img');
  let link = document.querySelectorAll('.link a');
  for (let a = 0; a < link.length; a++) {
    for (let i = 0; i < img.length; i++) {
      if (even.target == link[0] || even.target == img[0]) {
        img[0].setAttribute('src', 'images/icon-facebook.svg');
      } else if (even.target == link[1] || even.target == img[1]) {
        img[1].setAttribute('src', 'images/icon-twitter.svg');
      } else if (even.target == link[2] || even.target == img[2]) {
        img[2].setAttribute('src', 'images/icon-instagram.svg');
      }
    }
  }
});
