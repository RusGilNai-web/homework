const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const modalOpen = () => {
  modal.classList.add('modal--open')
  body.classList.add('body--fixed')
}

const modalClose = () => {
  modal.classList.remove('modal--open')
  body.classList.remove('body--fixed')
}

btn.addEventListener('click', modalOpen)

modal.addEventListener('click', event => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__btn-close')) {
    modalClose()
  }
})

document.addEventListener('keydown', event => {
  if (event.code === "Escape") {
    modalClose()
  }
})