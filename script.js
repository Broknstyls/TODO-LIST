let add = document.getElementById('add');
add.onclick = function(){
    let span = document.createElement('span');
    span.textContent = document.getElementById('objective').value;
    document.body.append(span);
}
document.querySelectorAll('span').onclick = function(){
    let span = document.querySelector('span');
    span.style.backgroundColor = 'rgb(67, 84, 95)';
}
let theme = document.getElementById('theme');
theme.onclick = function(){
    let color = document.getElementById('whole');
    if(color.style.backgroundColor == 'rgb(26, 28, 28)'){
        document.getElementById('theme').innerHTML = 'light mode'
        color.style.backgroundColor = 'aliceblue';
    } else{
        color.style.backgroundColor = 'rgb(26, 28, 28)'
        document.getElementById('theme').innerHTML = 'dark mode'


    }
}