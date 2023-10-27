# Sélection - Suppression d'élément

Suite à un oubli de la part du créateur de l'exercice plusieurs erreurs n'ont pas été corrigés sur la page.

Il en revient à vous pour corriger les erreurs qui y sont glissés.

**Remarque** : Le fichier `index.html` est en lecture seule et n'est affiché qu'à titre indicatif. Vous ne pouvez agir sur ce fichier qu'en **javascript**.

## Travail à faire

1. Selectionnez le premier fils de l'élèment `body` et modifiez son contenu en **Rick Astley - Never Gonna Give You Up**.
2. Sélectionnez tous les éléments possèdant la classe `couplet` et supprimer la première ligne qui est en double.  N'oubliez pas de supprimer le `br` qui cause le retour à la ligne.
3. Le refrain s'est dupliqué à cause de l'écho. Supprimez les occurences en double.
N'oubliez pas de supprimer le `br` qui cause le retour à la ligne.
4. Maintenant que toutes les erreurs ont été corrigées, supprimer l'élément ayant pour **id** `erreur`.
5. Ajoutez en bas de la page (dernier element de `body`), un `footer` contenant **© Copyright 2023 - Votre Nom**

## Conseils

- Utilisez `firstElementChild` [Ref](https://developer.mozilla.org/fr/docs/Web/API/ParentNode/firstElementChild) pour sélectionner le premier Element d'un Node.
- Utilisez `firstChild` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Node/firstChild) pour sélectionner le premier Node d'un Node.
- Utilisez `childNodes` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Node/childNodes) pour sélectionner les sous-Nodes d'un Node.
- Utilisez `document.getElementById("un_id")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById) pour récuperer un élément ayant pour **id** `un_id`.
- Pour sélectionner tous les éléments qui possèdent une classe, utilisez `document.getElementsByClassName("nom_classe")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByClassName) ou `document.querySelectorAll(".nom_classe")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll).  **Attention, ces fonctions retournent un tableau.**
- Utilisez `parent.removeChild(enfant)` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild) afin de supprimer un élément enfant d'un élément parent.
- Faites attention lorsque vous modifiez les elements d'une liste lors de son parcours.
- Utilisez `parent.appendChild(child)` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) pour ajouter un element.  **Attention, appendChild n'accepte que des Node**.  Il faut donc les créer, ce qui peut se faire avec `document.createElement()` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode) pour créer un Element et document.createTextNode("un texte")ref pour créer un noeud de type Text contenant un texte.

**Amusez-vous bien pour la conception !** 🚀
