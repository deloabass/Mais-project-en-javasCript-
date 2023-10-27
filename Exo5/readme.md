# Porfolio, Ajout dynamique des données dans le DOM

**Remarque** : Il n'y a normalement pas besoin de modifier `index.html` et `style.css`, Vous ne pouvez agir sur ce fichier qu'en **javascript**.

## Travail à faire

1. Selectionnez l'élèment `h1` qui a `id` **fullname** et modifiez son contenu en **Hey, I'm datas fullname**.
2. Selectionnez l'élèment `h1` qui a `id` **profil** et modifiez son contenu en **datas profil**.
3. Selectionnez l'élèment `p` qui a `id` **description** et modifiez son contenu en **datas description**.
4. Selectionnez l'élèment `image` qui se trouve dans l'élément possedant l'`id` **picture** et modifiez sa source en **datas picture**.
5. Sélectionnez tous les éléments possèdant la classe `socials` et parcourir le tableau **datas socials** en ajoutant les éléments  comme suit:

   ```html
    <li>
      <a href="datasSocialsUrl"><img src="datasSocialsLink" alt="datasSocialsLinkName"></a>
    </li>
   ```

6. Sélectionnez l'élément possèdant l'identifiant `works` et parcourir le tableau **datas works** en ajoutant les éléments sans oublier de faire afficher les technologies **datas works technology** comme suit:

   ```html
    <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
      <div class="card">
        <img class="card-img-top" src="datasWorksPreview" alt="datasWorksName">
        <div class="card-body w-100 px-0">
          <h2 class="card-title mt-0 mb-4 text-center">datasWorksName</h2>
          <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
            <!-- 
              <li>
                <span class="card-link">datasWorksTechnology</span>
              </li>
              -->
          </ul>
          <div class="row w-100">
            <div class="d-flex justify-content-center">
              <a href="datasWorksUrl" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   ```

7. Sélectionnez l'élément possèdant l'identifiant `experiences` et parcourir le tableau **datas experiences** en ajoutant les éléments sans oublier de faire afficher les technologies **datas works experiences** comme suit:

   ```html
    <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
      <div class="card h-100">
        <img class="card-img-top" src="datasExperiencessUrl" alt="datasExperiencessName">
        <div class="card-body w-100 px-0">
          <h2 class="card-title mt-0 mb-4 text-center">datasExperiencessName</h2>
          <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
            <!-- 
              <li>
                <span class="card-link">datasExperiencesTechnology</span>
              </li>
            -->
          </ul>
        </div>
      </div>
    </div>
   ```

8. Selectionnez l'élèment `h1` qui a `id` **mail** et modifiez son contenu en **datas email**.

## Conseils

- Le but est de tout faire en js.
- Observez la structure de la donnée qui vous est fournie.
- N'hésitez pas a créer des fonctions et a structurer votre code pour simplifier la lecture de certaines opérations. Par exemple, une fonction qui permet d'ajouter de technologies.
-References:
  - `document.getElementById("un_id")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById).
  - `document.getElementsByClassName("nom_classe")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByClassName) ou `document.querySelectorAll(".nom_classe")` [Ref](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll)
  **Attention, ces fonctions retournent un tableau.**

**Amusez-vous bien pour la conception !** 🚀
