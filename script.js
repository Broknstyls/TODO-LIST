let fun =document.getElementById('theme');
fun.onclick = function(){
    if(document.getElementById('whole').style.background == 'rgb(26, 28, 28)'){
        document.getElementById('whole').style.background = 'aliceblue';
    } else{
        document.getElementById('whole').style.background = 'rgb(26, 28, 28)'
    }
}
let add= document.getElementById('add').onclick = function(){
let div = document.createElement('div');
let todo = document.getElementById('objective').textContent;
div.append = (todo);
body.append(div);
}