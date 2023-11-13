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