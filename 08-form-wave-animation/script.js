// document.querySelector('input').previousElementSibling.querySelector('label')

const fields = document.querySelectorAll('input')

for (let field of fields) {
  const chars = field.previousElementSibling.querySelector('label').innerText

  field.addEventListener('click', () => {
    field.previousElementSibling.querySelector('label').innerHTML = ''
    
    for (let i in chars) {
      field.previousElementSibling.querySelector('label').innerHTML += `<span>${chars.split('')[i]}</span>`
    }
  })

  window.addEventListener('click', e => {
      if (!field.contains(e.target))
        field.innerHTML = chars
    }
  )
}