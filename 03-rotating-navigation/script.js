const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    document.body.className = 'rotated'
})

close.addEventListener('click', () => {
    document.body.className = ''
})