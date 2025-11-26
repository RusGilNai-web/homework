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

  const modalOpenBtn = document.querySelector('.about__img-button')
  const modal = document.querySelector('.modal')
  const body = document.body

  const modalOpen = () => {
    body.classList.add('body--opened-modal')
  }

  const modalClose = () => {
    body.classList.remove('body--opened-modal')
  }

  modalOpenBtn.addEventListener('click', modalOpen)

  modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.closest('.modal__cancel') || target.classList.closest('.button')) {
      modalClose()
    }
  })

})()



