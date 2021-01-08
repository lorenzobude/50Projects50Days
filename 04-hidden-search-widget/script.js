const srcDiv = document.getElementById('search')
const srcBox = document.getElementById('search-box')
const srcIcon = document.getElementById('search-icon')

srcIcon.addEventListener('click', () =>
  srcBox.classList.contains('open') ? closeSearch() : openSearch()
)

window.addEventListener('click', e =>
  !srcDiv.contains(e.target) && closeSearch()
)

const openSearch = () => {
  srcBox.className = 'open'
  srcBox.focus()
}

const closeSearch = () => {
  srcBox.className = ''
  srcBox.value = ''
}