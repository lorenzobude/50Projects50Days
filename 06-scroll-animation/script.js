const cards = document.querySelectorAll('.card')

window.addEventListener('scroll', animate)

animate()

function animate() {
  const triggerBottom = window.innerHeight / 10 * 9

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top
    cardTop < triggerBottom ? card.classList.add('show') : card.classList.remove('show')
  })
}