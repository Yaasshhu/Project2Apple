window.onload= geolocation();
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(Showposition);
    }else{
        console.log("error")
    }
}
function Showposition(data){
    console.log(data)
    let long = data.coords.longitude;
    let leti = data.coords.latitude;
    const url=`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${leti}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    var today=new Date();
    var time = today.getHours();
    console.log(time);
    fetch(url,{method:'GET'})
    .then((res)=> res.json())//promise method
    .then((data)=>{
        let Cityname= data.city.name;
        document.getElementById('Cityn').innerText=`${Cityname}`;
        // let temp= data.list[0];
        // document.getElementById('outweather').innerText=`your city ${Cityname} having Temprature ${temp}`;
        let morng,dayy,eveni,ngt;
        if(time>=4&&time<=12){
            morng = data.list[0].temp.morn;
            document.getElementById('tempnote').innerText =`Temp ${morng}(morning)`;
        }else if(time>12&&time<=16){
            dayy = data.list[0].temp.day;
            document.getElementById('tempnote').innerText =`Temp ${dayy}(day)`;
        }else if(time>16&&time<19){
            eveni = data.list[0].temp.eve;
            document.getElementById('tempnote').innerText =`Temp ${eveni}(evening)`;
        }else{
            ngt = data.list[0].temp.night;
            document.getElementById('tempnote').innerText =`Temp ${ngt}(night)`;
        }
    })
}
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
