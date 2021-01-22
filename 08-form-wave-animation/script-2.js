const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((char, i) => `<span style="transition-delay: ${i * 25}ms">${char}</span>`)
    .join('')
})