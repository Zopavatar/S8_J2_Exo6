let div = document.getElementsByTagName("div")[0];

let i = 0;

function maFonction(e){
    i++;

   e.currentTarget.style ="border";
   e.currentTarget.getElementsByTagName("p")[0].style ="font-weight: 600; color:red;";
   e.currentTarget.getElementsByTagName("h1")[0].style ="text-decoration: underline";
   e.currentTarget.getElementsByTagName("h2")[0].innerText = document.getElementsByTagName("h2")[0].innerText.substring(1);
}

div.addEventListener('click',maFonction);


let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let section = document.getElementsByTagName("section")[0];

section.style = "border: solid white";

section.addEventListener('mouseover', ()=> {
    if(section.getElementsByTagName("p")[0].innerText == ""){
        section.getElementsByTagName("p")[0].innerText += texte;
    }
})