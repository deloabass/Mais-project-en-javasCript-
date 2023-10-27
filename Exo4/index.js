let body = document.body;
// 1.
const title = document.createElement("h1");
title.innerHTML = `<small>${chanson.auteur} - </small>${chanson.titre}`;
body.prepend(title);
//2
let div = document.createElement("div");
div.classList = "paroles";
title.insertAdjacentElement("afterend", div);
for (let i = 0; i < chanson.paroles.length; i++) {
  let paragraphe = document.createElement("p");
  let containu = chanson.paroles[i];
  for (let a = 0; a < containu.contenu.length; a++) {
    const element = containu.contenu[a];
    paragraphe.innerHTML += `${element} <br>`;
  }
  div.append(paragraphe);
}
// 3.
let footer = document.createElement("footer");
footer.textContent = "© Copyright 2023 - Codeloccol";
//insertAdjacentElement insère un noeud d'élément donné à une position donnée par rapport à l'élément sur lequel il est appelé.
div.insertAdjacentElement("afterend", footer);
/* ----------------------------------------------------------------------------------------------------------- */
// 4.
//insertBefore insère un nœud avant un nœud de référence en tant qu'enfant d'un nœud parent spécifié
div.innerHTML = "";
for (let i = 0; i < chanson.paroles.length; i++) {
  let paragraphe = document.createElement("p");
  let span = document.createElement("h4");
  let spn1 = document.createElement("span");
  span.classList.add("hidden");
  for (let a = 0; a < chanson.paroles[i].contenu.length; a++) {
    const element = chanson.paroles[i].contenu[a];
    // créer les les class des paragraphe avec type
    let type = chanson.paroles[i].type;
    spn1.classList.add(type);
    if (spn1.classList == "choeur") {
      span.innerHTML = "[Les choeur]<br>";
      span.classList.add("parcourir");
    }
    spn1.appendChild(document.createTextNode(element));
    if (i < chanson.paroles[i].contenu.length) {
      spn1.appendChild(document.createElement("br"));
    }
  }
  paragraphe.appendChild(spn1);
  div.appendChild(paragraphe);
  paragraphe.prepend(span);
}
// la ligne origontal de document
let hr = document.createElement("hr");
body.insertBefore(hr, div);
// le code de l' input un(2) dans mon document
let label2 = document.createElement("label");
let input2 = document.createElement("input");
input2.type = "checkbox";
input2.setAttribute("name", "refrain");
input2.setAttribute("id", "afficher-paroles");
label2.innerHTML = "Masquer les paroles";
label2.prepend(input2);
body.insertBefore(label2, hr);
// Fin du code input2 \/======================================//
// le code de l' input un(1) dans mon document
let label1 = document.createElement("label");
let input1 = document.createElement("input");
input1.setAttribute("type", "checkbox");
input1.setAttribute("name", "refrain");
input1.setAttribute("id", "masquer-refrain");
label1.innerHTML = "Masquer les choeur";
label1.prepend(input1);
body.insertBefore(label1, label2);
// ---------------------------------------------------
// l'utilisation de l'input1
const checked1 = document.getElementById("masquer-refrain");
let parcour = document.querySelectorAll(".parcourir");
let masque1 = document.querySelectorAll(".choeur");
checked1.addEventListener("click", function (event) {
  for (let i = 0; i < masque1.length; i++) {
    if (event.target.checked) {
      parcour[i].classList.remove("hidden");
      masque1[i].classList.add("hidden");
      checked1.nextSibling.textContent = "Afficher les choeur";
      parcour[i].addEventListener("mouseenter", function () {
        masque1[i].classList.remove("hidden");
      });
      parcour[i].addEventListener("mouseleave", function () {
        masque1[i].classList.add("hidden");
      });
    } else {
      checked1.nextSibling.textContent = "Masquer les choeur";
      masque1[i].classList.remove("hidden");
      parcour[i].classList.add("hidden");
    }
  }
});
// l'utilisation de l'input 2
let checked = document.getElementById("afficher-paroles");
let paroles = document.querySelector(".paroles");
checked.addEventListener("click", function (event) {
  if (event.target.checked) {
    paroles.classList.add("hidden");
    hr.classList.add("hidden");
    checked.nextSibling.textContent = "Afficher les paroles";
  } else {
    paroles.classList.remove("hidden");
    hr.classList.remove("hidden");
    checked.nextSibling.textContent = "Masquer les paroles";
  }
});
/* Suprimier les margin et les padding */
let paragraphe = document.querySelectorAll("p");
for (let q = 0; q < paragraphe.length; q++) {
  paragraphe[q].style.margin = 0;
}
