let bgBlur = 100
let load = 0

const loading = setInterval(() => { 

    bgBlur--
    load++
    document.getElementById('background').style.filter = `blur(${bgBlur / 2}px)`
    document.getElementById('counter').innerText = `${load}%`
    load == 100 && clearInterval(loading)

}, 25)