//your code here
const show = document.getElementById('wordCount')
const box = document.getElementById('evaluatedText')

box.addEventListener('keyup', function(){
    let count = box.value.split(' ').length
    show.innerHTML = count
})