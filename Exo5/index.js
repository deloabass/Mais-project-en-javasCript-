//1
let text = document.getElementById("fullName");
text.innerHTML = "Hey, i' m " + datas.fullname;
//2
let textdeux = document.getElementById("profil");
textdeux.innerHTML = datas.profil;
//3
let paragraphe = document.getElementById("description");
paragraphe.innerHTML = datas.description;
//4
let images = document.querySelector(".img-fluid");
images.src = datas.picture;
//5
/*================Afiche les icons du web=================  */
const social = document.querySelectorAll(".socials");
for (let index = 0; index < social.length; index++) {
  social[index].innerHTML = "";
  for (let a = 0; a < datas.socials.length; a++) {
    const parcourir = datas.socials[a];
    social[index].innerHTML += `<li>
      <a href=${parcourir.url}><img src=${parcourir.link} alt=${parcourir.name}></a>
    </li>`;
  }
}
//6
/* ==========================Afiche les elemant de la div et la liste ordonner  ===============================*/
function ul (abassa) {
  let vide = "";
  for (let v = 0; v < abassa.length; v++) {
    vide += `<li><span class="card-link">${abassa[v]}</span></li>`;
  }
  return vide;
};
let work = document.getElementById("works");
for (let i = 0; i < datas.works.length; i++) {
  const contain = datas.works[i];
  work.innerHTML += `
    <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
      <div class="card">
        <img class="card-img-top" src="${contain.preview}" alt="${contain.name}">
        <div class="card-body w-100 px-0">
          <h2 class="card-title mt-0 mb-4 text-center">${contain.name}</h2>
          <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
            ${ul(datas.works[i].technology)}
          </ul>
          <div class="row w-100">
            <div class="d-flex justify-content-center">
              <a href="${contain.url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
//7
function soum (soumana) {
  let vide = "";
  for (let v = 0; v < soumana.length; v++) {
    vide += `<li><span class="card-link">${soumana[v]}</span></li>`;
  }
  return vide;
};
let experience = document.getElementById("experiences");
for (let e = 0; e < datas.experiences.length; e++) {
  let allExperience = datas.experiences[e];
  experience.innerHTML += ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
  <div class="card h-100">
    <img class="card-img-top" src="${allExperience.link}" alt=${
    allExperience.name
  }">
    <div class="card-body w-100 px-0">
      <h2 class="card-title mt-0 mb-4 text-center">${allExperience.name}</h2>
      <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
      ${soum(datas.experiences[e].technology)}
      </ul>
    </div>
  </div>
</div>`;
}
//8
let mail = document.getElementById("mail");
mail.innerHTML = datas.email;
