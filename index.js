let body = document.getElementsByTagName('body')[0]
let html = document.getElementsByTagName('html')[0]

// let nav = document.createElement('nav');
let main = document.createElement('main');

// body.appendChild(nav)
body.appendChild(main)

let exercices = [{
        title: "'Firendship is Magic",
        content: "Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'. Vous pouvez trouver les noms sur ce lien : https://mlp.fandom.com/fr/wiki/Personnages Vous générerez une liste html qui affichera les différents noms de personnages.",
        link: "./personnage/index.html"
    },{
        title: "L'horloge",
        content: "Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes pour afficher l'heure actuelle.",
        link: "./horloge/index.html"
    },{
        title: "Le FizzBuzz",
        content: "Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nombre, on affichera à coté de ce dernier 'fizz' si le nombre est un multiple de 3, 'buzz' si le nombre est un multiple de 5 et 'fizzbuzz' si le nombre est un multiple de 3 et 5. Vous utiliserez une fonction !",
        link: "./FizzBuzz1/index.html"
    },{
        title: " Le fizzbuzz ++ ",
        content: "Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous  chiffre. Vous utiliserez une écoute d'événement pour les boutons !",
        link: "./FizzBuzz2/index.html"
    },
]



for (let index0 = 0; index0 < exercices.length; index0++) {
    let card = document.createElement('div');
    main.appendChild(card).setAttribute('id', 'card-' + index0)
    main.appendChild(card).setAttribute('class', 'card')
    const element = exercices[index0];
    for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {
            const element1 = element[key];
            if(key !== "link"){
                let p = document.createElement('p');
                p.innerHTML= `${element1}`
                card.appendChild(p)
            }
        
        }
    }

    let lien = document.createElement('a');
    let btn = document.createElement('button');
    card.appendChild(lien);
    lien.appendChild(btn);
    lien.setAttribute('href', element.link);
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "Voir l'exercice";
}


