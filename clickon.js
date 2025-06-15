let h1 = document.getElementById('h1');
let btn = document.getElementById('btn');

btn.onclick = function(){
    h1.classList.add('style')
    h1.style.color = 'blue';
    h1.style.backgroundColor = 'lightgrey';
    console.log('h1 clicked')

}