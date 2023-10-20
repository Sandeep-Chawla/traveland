let left = document.getElementById('left');
let right = document.getElementById('right');
function moveright(){
    document.getElementById('h-card').style.marginLeft='0px';
};
function moverleft(){
    document.getElementById('h-card').style.marginLeft='-33%';
};
var i=30;
setInterval(function(){
    i--
    document.getElementById('min').innerHTML=i;
},60000);
var j=60;
setInterval(function(){
    j--
    document.getElementById('sec').innerHTML = j;
    if(j==0){
        j =60
    }
},1000)