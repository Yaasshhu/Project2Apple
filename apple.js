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
function Drklgt(){
    document.body.classList.toggle('bcolor');
    // document.getElementsByTagName('div')[38].classList.toggle('lgtfoot')
    // document.getElementsByTagName('div')[39].classList.toggle('lgtfoot')
    // document.getElementsByTagName('div')[40].classList.toggle('lgtfoot')
    // document.getElementsByTagName('div')[41].classList.toggle('lgtfoot')
    // document.getElementsByTagName('div')[42].classList.toggle('lgtfoot')
    i=38;
    while(i<=42){
        document.getElementsByTagName('div')[i].classList.toggle('lgtfoot');
        i++;
    }
    document.getElementsByTagName('p')[0].classList.toggle('redpdrk');
    document.getElementsByTagName('button')[2].classList.toggle('cngbtnd');
}