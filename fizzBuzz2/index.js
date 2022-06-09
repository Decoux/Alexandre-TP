let body = document.getElementsByTagName('body')[0];

let main = document.createElement('div');
main.setAttribute('class', 'main');

let container = document.createElement('div');
container.setAttribute('class', 'container');

let content = document.createElement('div');
let container_btn = document.createElement('div');

count = 0;
content.innerHTML = count;
container.appendChild(content)

let btnLeft = document.createElement('button');
btnLeft.setAttribute('class', 'btn');
btnLeft.setAttribute('type', 'button');
btnLeft.innerHTML = " - !!"

let btnRight = document.createElement('button');
btnRight.setAttribute('class', 'btn');
btnRight.setAttribute('type', 'button');
btnRight.innerHTML = " + !!";
let txt = document.createElement('span');
txt.style.fontSize = "50px";
container.appendChild(txt);
container_btn.appendChild(btnLeft);
container_btn.appendChild(btnRight);
body.appendChild(main);
container.appendChild(container_btn);
main.appendChild(container);
content.style.position = "absolute"
content.style.top = "150px"
txt.style.position = "absolute"
txt.style.top = "350px"



// 1 et 100


btnLeft.addEventListener('click', event => {
    if(count > 0){
        count--

        content.innerHTML = count;
    
        if(count % 15 == 0){
            console.log(txt);
            txt.innerHTML = "FizzBuzz"
            content.style.fontSize = "30px";
        }else if(count % 5 == 0) {
            count.innerHTML = "Buzz"
            content.style.fontSize = "30px";
        }else if(count % 3 == 0) {
            txt.innerHTML = "Fizz"
            content.style.fontSize = "30px";

        }else {
            txt.innerHTML = ""
            content.style.fontSize = "20px";
        }
    }
   
})


btnRight.addEventListener('click', event => {
    if(count < 100){
        count++
        content.innerHTML = count;
        if(count % 15 == 0){
            console.log(txt);
            txt.innerHTML = "FiizBuzz"
            content.style.fontSize = "30px";
        }else if(count % 5 == 0) {
            txt.innerHTML = "Buzz"
            content.style.fontSize = "30px";
        }else if(count % 3 == 0) {
            txt.innerHTML = "Fizz"
            content.style.fontSize = "30px";
        }else {
            txt.innerHTML = ""
            content.style.fontSize = "20px";
        }
    }
})
