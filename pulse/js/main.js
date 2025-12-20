(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const navLink = e.target.closest('.nav__link')

    if (!burgerIcon && !navLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // swiper

  const swiper = new Swiper('.about__slider', {
  
  direction: 'vertical',
  mousewheel: true, 
  speed: 700,    
  pagination: {
    el: '.about__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <span class="${className}">
          <span class="bullet-index">${index + 1}</span>
        </span>
      `;
    }
  },
  });

}) ()