const searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.get('name'));

//On récupère name et on l'injecte dans le HTML dans la div id prenom

document.getElementById("prenom").innerHTML=searchParams.get('name');
console.log(document.getElementById("prenom"));

// QUand le bouton est pressé: 
//    1. Son propre prenom doit être retiré de la liste des prenom à tirer
//    2. Un prénom doit apparaitre en dessous du bouton
//    3. Ce prénom doit être "enlevé" de la liste existante


// Récuperer le bouton
const bouton = document.getElementById("choix");



//Tableau des noms
 const arrNames = [
    {   nom:"Perle",
        imgFile:"images/racoon.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Queen", 
        imgFile:"images/chat.webp",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Elsa", 
        imgFile:"images/castor.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Syrine", 
        imgFile:"images/ecureuil.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"M", 
        imgFile:"images/bison.webp",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Yue", 
        imgFile:"images/orignal.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Anissa", 
        imgFile:"images/rorqual.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
    {   nom:"Imran", 
        imgFile:"images/lynx.jpg",
        wish: "Choiyeux Noyel !!!"
    }, 
];



 //Tableau des noms avec le nom de l'url retiré
 const arrayWithoutName = arrNames.filter(function (name) {
    return name.nom !== searchParams.get('name');
});

// console.log(`${arrayWithoutName.nom}, ${arrayWithoutName.ImgFile}`);

//Créer une fonction qui choisi un nom randomly dans l'arrWithoutName
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    // delete random item
        delete arr[randomIndex];
        
    return item;

}

const resultRandomPick = getRandomItem(arrayWithoutName);



//On récupère le name de l'url et on le match avec celui de l'array pour le remove 
// bouton.onclick = () => {
//     document.getElementById("englobe").innerHTML=resultRandomPick;

// };

bouton.onclick = () => {
    const nameElement = document.createElement('div');
    nameElement.textContent = resultRandomPick.nom; // Ajoute le nom au nouvel élément div

    const imageElement = document.createElement('img');
    imageElement.src = resultRandomPick.imgFile; // Ajoute le chemin de l'image à l'élément img
    
    const wishElement = document.createElement('div');
    wishElement.textContent = resultRandomPick.wish; // Ajoute une phrase

    const englobeDiv = document.getElementById('englobe');
    englobeDiv.innerHTML = ''; // Efface le contenu actuel
    

    englobeDiv.appendChild(nameElement); // Ajoute le nom
    englobeDiv.appendChild(imageElement); // Ajoute l'image
    englobeDiv.appendChild(wishElement); // Ajoute une phrase
};