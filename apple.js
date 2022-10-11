setTimeout(function loadcoupan(){
    document.getElementById('coupan').style.visibility="visible";
    for(i=0;i<=8;i++){
        document.getElementsByClassName('container')[i].style.opacity=".4";
    }
    document.getElementById('navspace').style.opacity=".4";
},1000);
function closecoupan(){
    document.getElementById('coupan').style.visibility="hidden";
    for(i=0;i<=8;i++){
        document.getElementsByClassName('container')[i].style.opacity="1";
    }
    document.getElementById('navspace').style.opacity="1";
}