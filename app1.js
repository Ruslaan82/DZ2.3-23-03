var c = 0;
var p;

function start (){
    c++
    document.getElementById('div1').innerHTML=c;
}
function fun1 (){
    c = 0;
    p = setInterval('start()', 100)
}
function fun2 (){
    clearInterval(p)
}