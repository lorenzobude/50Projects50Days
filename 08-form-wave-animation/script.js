const labels = document.querySelectorAll('label')
const fields = document.querySelectorAll('input')

labels.forEach(label => {

  const chars = label.innerText
  
  label.innerText = '' 
   
  for (let char of chars) {
    label.innerHTML += `<span>${char.split('')}</span>`
  }

})

fields.forEach(field => {

  const wave = (cssClass) => {
    const spans = field.previousElementSibling.querySelectorAll('span')

    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].className = cssClass
      }, 25 * i)
    }
  }

  field.addEventListener('click', () => wave('up'))

  window.addEventListener('click', e => {
    if (!field.contains(e.target))
      wave('')
  })

})