let add = document.getElementById('add');
add.onclick = function(){
    let span = document.createElement('span');
    span.textContent = document.getElementById('objective').value;
    document.body.append(span);
}