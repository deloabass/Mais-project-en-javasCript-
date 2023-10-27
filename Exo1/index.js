// 1.
    let body = document.body;
    body.firstElementChild.textContent = 'Rick Astley - Never Gonna Give You Up';
// 2.
const element = document.getElementsByClassName('couplet');
for (let i = 0; i < element.length; i++) {
    element[i].firstChild.remove();
    element[i].firstElementChild.remove();
}
// 3.
let refrain = document.querySelectorAll('.refrain');
    refrain.forEach(element => {
       let a = element.innerHTML.replace(/<br\/>/g).split("<br>")
    
        let tableau = [];
        let ensemble = new Set();


        a.forEach(elementcouper => {
            if (!ensemble.has(elementcouper.trim())) {
                ensemble.add(elementcouper.trim())
                tableau.push(elementcouper)
            }
        });
        element.innerHTML = tableau.join("<br>")
    });
// 4.
let recuper = document.getElementById('erreur');
recuper.remove();
// 5.
let footer = document.createElement('footer');
footer.textContent = '© Copyright 2023 - Abassa';
document.body.appendChild(footer);