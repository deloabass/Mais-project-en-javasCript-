// Récupere la case "masquer les paroles"
let body = document.body;
const checkboxParoles = document.getElementById('masquer-paroles'); // à compléter, ce code ne fonctionne pas
const checkbox = document.getElementById('masquer-refrains');

const  definition = document.querySelectorAll('.definition');
// Récupère le div contenant les paroles
const divParoles = document.getElementById('paroles'); //
let refrain = document.querySelectorAll('.refrain');
let contenu = document.querySelectorAll('.contenu')
let p = document.querySelectorAll('p');


// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {

  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée
    divParoles.classList.add('hidden');
    checkboxParoles.parentElement.childNodes[1].textContent = 'Afficher les paroles'; 
  } else {
    // la case vient d'être decochée
    divParoles.classList.remove('hidden');
    checkboxParoles.parentElement.childNodes[1].textContent = 'masquer-paroles';
  }
});




checkbox.addEventListener('click', function (event) {
  if(event.target.checked){
    checkbox.parentElement.childNodes[1].textContent = 'Afficher les refrains';
    for(let i = 0; i < refrain.length;i++){
      contenu[i].classList.add('hidden');
      definition[i].classList.remove('hidden');
  //mouseenter hover
  definition[i].addEventListener('mouseenter', function () {
        contenu[i].classList.remove('hidden')
      });

      //mouseenter hover
      definition[i].addEventListener('mouseleave', function () {
        contenu[i].classList.add('hidden')
      })


    }
   
   
  }
  else {
      for(let i = 0; i < refrain.length;i++){
        contenu[i].classList.remove('hidden')
        definition[i].classList.add('hidden');
      }
      checkbox.parentElement.childNodes[1].textContent = ' Masquer les refrains'
  }
})


for(let q = 0; q < p.length;q++){
  p[q].style.margin = 0;
}
