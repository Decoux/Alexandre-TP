let body = document.getElementsByTagName('body')[0];

let main = document.createElement('div');
main.setAttribute('class', 'main');

let container = document.createElement('div');
container.setAttribute('class', 'container');

let content = document.createElement('div');
let container_btn = document.createElement('div');

container.appendChild(content)

let txt = document.createElement('span');
txt.style.fontSize = "50px";
body.appendChild(main);
container.appendChild(container_btn);
main.appendChild(container);
content.style.position = "absolute"
content.style.top = "150px"
txt.style.position = "absolute"
txt.style.top = "350px"
let ul = document.createElement('ul')
ul.style.height = "50%"
container.appendChild(ul);

for (let index = 0; index < 101; index++) {
    let li = document.createElement('li')
    
    ul.appendChild(li)
    txt.innerHTML = index
    if(index % 15 == 0){
        li.innerHTML =  index + " : FizzBuzz"
        
    }else if(index % 5 == 0) {
        li.innerHTML = index + " : Buzz"
    }else if(index % 3 == 0) {
        li.innerHTML = index + " : Fizz"
    }else {
        li.innerHTML = index
        content.style.fontSize = "20px";
    }
}



