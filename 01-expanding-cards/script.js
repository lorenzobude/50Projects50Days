const figures = document.querySelectorAll('figure')

figures.forEach(figure => {
  figure.addEventListener('click', () => {
    figures.forEach(figure => figure.className = '')
    figure.className = 'active'
  })
})