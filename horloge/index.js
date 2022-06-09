let body = document.getElementsByTagName('body')[0]
console.log(body);

let main = document.createElement('div');
main.setAttribute('class', 'main');

body.appendChild(main);

let container_horloge = document.createElement('div')
container_horloge.setAttribute('class', 'container-horloge')
main.appendChild(container_horloge);7

let heure = document.createElement('div');
let minute = document.createElement('div');
let seconde = document.createElement('div');

container_horloge.appendChild(heure)
container_horloge.appendChild(minute)
container_horloge.appendChild(seconde)

let date = new Date()
console.log(date);



for (let index = 0; index < 3; index++) {
    let span = document.createElement('span');
    span.setAttribute('class', 'span');
    span.setAttribute('id', index);
    container_horloge.childNodes[index].appendChild(span);
}

heure.setAttribute('class', 'heure')
minute.setAttribute('class', 'minute')
seconde.setAttribute('class', 'seconde')

heures_span = document.getElementById("0")
minutes_span = document.getElementById("1")
secondes_span = document.getElementById("2")
heures_span.innerHTML = new Date()


.getUTCHours()+ ":";
minutes_span.innerHTML = new Date().getUTCMinutes() + ":";
secondes_span.innerHTML = new Date().getUTCSeconds();
// if(timer < 10){
//     secondes_span.innerHTML = "0" + timer
// }else {
//     secondes_span.innerHTML = timer
  
// }

timer_secondes = 0;
timer_minutes = 0; 
timer_heures = 0; 
setInterval(function () {
    
    timer_secondes++
    if(new Date(date.setSeconds(date.getSeconds() + 1)).getSeconds() < 10){
        secondes_span.innerHTML = "0"+ new Date(date.setSeconds(date.getSeconds())).getSeconds(); 
    }else {
        secondes_span.innerHTML = new Date(date.setSeconds(date.getSeconds())).getSeconds(); 
      if(timer_secondes > 60){
        timer_secondes = 0

        timer_minutes++
        }
    }

    if(new Date(date.setMinutes(date.getMinutes())).getMinutes() < 10){
        minutes_span.innerHTML = "0"+ new Date(date.setMinutes(date.getMinutes())).getMinutes()+ " :"; 
    }
    else {
        minutes_span.innerHTML = new Date(date.setMinutes(date.getMinutes())).getMinutes()+ " :"; 
        if(timer_minutes > 60){
            timer_minutes = 0
            timer_heures++
        }
    }

    if(new Date(date.setHours(date.getHours())).getHours() < 10){
        heures_span.innerHTML = "0"+ new Date(date.setHours(date.getHours())).getHours()+ " :"; 
    }
    else {
        heures_span.innerHTML = new Date(date.setHours(date.getHours())).getHours()+ " :"; 
    }
}, 1000);




