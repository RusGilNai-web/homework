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
  
  direction: 'horizontal',
  mousewheel: true, 
  speed: 700,  
  slidesPerView: 'auto',  
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
  breakpoints: {
    1201: {
      direction: 'vertical'
    },
  },
  });
  
  const tabControls = document.querySelector('.advantages__tabs-list')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabLink = e.target.closest('.advantages__tabs-link')
    
    if (!tabLink) return
    e.preventDefault()
    if(tabLink.classList.contains('advantages__tabs-link--active')) return
    
    const tabLinkID = tabLink.getAttribute('href')

    document.querySelector('.advantages__content-tab--show').classList.remove('advantages__content-tab--show')
    document.querySelector(tabLinkID).classList.add('advantages__content-tab--show')

    document.querySelector('.advantages__tabs-link--active').classList.remove('advantages__tabs-link--active')
    tabLink.classList.add('advantages__tabs-link--active')
  }

}) ()