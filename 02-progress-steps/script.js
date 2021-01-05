const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const progressBar = document.getElementById('progress')
const nums = document.querySelectorAll('.num')
const steps = nums.length - 1

let index = 0
let progress = 0

btnPrev.addEventListener('click', () => {
    if (index >= 0) {
        index--
        progress -= Math.floor(100 / steps)
        progressBar.style.width = `${progress}%`
        nums[index + 1].classList.remove('active')
        btnNext.disabled = false
    }
    if (index == 0)
        btnPrev.disabled = true
})

btnNext.addEventListener('click', () => {
    if (index >= 0 && index <= steps - 1) {
        index++
        progress += Math.floor(100 / steps)
        progressBar.style.width = `${progress}%`
        nums[index].classList.add('active')
        btnPrev.disabled = false
    }
    if (index == steps)
        btnNext.disabled = true
})