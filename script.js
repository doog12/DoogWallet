document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerNav = document.querySelector('.burger-nav')

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    burgerNav.classList.toggle('active')
    document.body.classList.toggle('overflow-hidden')
  })









  
  const selectSingle = document.querySelector('.__select')
  const selectSingle_title = selectSingle.querySelector('.__select__title')
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '')
    } else {
      selectSingle.setAttribute('data-state', 'active')
    }
  })

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent
      selectSingle.setAttribute('data-state', '')
    })
  }

  const SecondSelectSingle = document.querySelector('.second__select')
  const SecondSelectSingle_title = SecondSelectSingle.querySelector('.second__select__title')
  const SecondSelectSingle_labels = SecondSelectSingle.querySelectorAll('.second__select__label')

  SecondSelectSingle_title.addEventListener('click', () => {
    if ('active' === SecondSelectSingle.getAttribute('data-state')) {
      SecondSelectSingle.setAttribute('data-state', '')
    } else {
      SecondSelectSingle.setAttribute('data-state', 'active')
    }
  })

  // Close when click to option
  for (let i = 0; i < SecondSelectSingle_labels.length; i++) {
    SecondSelectSingle_labels[i].addEventListener('click', (evt) => {
      SecondSelectSingle_title.textContent = evt.target.textContent
      SecondSelectSingle.setAttribute('data-state', '')
    })
  }
})