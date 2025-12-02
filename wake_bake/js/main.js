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

  // --------------------------------

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

  // ----------------------------------------

  const tabControls = document.querySelector('.tab-control')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-control__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-control__link--active')) return

    const tabContentID = tabControl.getAttribute('href')

    document.querySelector('.tab-content--show').classList.remove('tab-content--show')
    document.querySelector(tabContentID).classList.add('tab-content--show')

    document.querySelector('.tab-control__link--active').classList.remove('tab-control__link--active')
    tabControl.classList.add('tab-control__link--active')
  }

  // -------------------------------------

  const accordionLists = document.querySelectorAll('.accordion-list')

  accordionLists.forEach(el => {

    el.addEventListener('click', event => {

      const accordionList = event.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = event.target.closest('.accordion-list__control')
      if (!accordionControl) return
      const accordionItem = accordionControl.parentElement
      const accordionContent = accordionControl.nextElementSibling

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened')
        accordionOpenedContent.style.maxHeight = null
      }

      accordionItem.classList.toggle('accordion-list__item--opened')

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      } else {
        accordionContent.style.maxHeight = null
      }
    })

  })

})()



