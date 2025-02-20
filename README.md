# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi laver mapper til henholdsvis fonte, billeder og andre ressourcer i root mappen.
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  I dette projekt har vi valgt at vores filer bare ligger frit i root mappen
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  I dette projekt har vi valgt at vores filer bare ligger frit i root mappen

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  Små bogstaver og underscore som mellemrum \_
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  De hedder det samme

## Link til scripts:

- Vi placerer script tags i headeren, og bruger kommandoen defer

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Skriver hvad der bliver lavet i dem og hvem der laver i brachen

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har uddeligeret forskellige html,css og js filer til hvert gruppemedlem, så vi undgår forvirring
- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi skriver add eller delete ud fra om vi tilføjer eller fjerner, og så skriver hvad der bliver tilføjet eller fjernet
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi har ikke kommunikeret noget endnu, men fra nu af skriver vi hvad der er lavet af ændringer

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Arrow functions
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger id'er til Javascript og classes til CSS
- Skal filer have korte forklaringer som kommentarer?
  Nej, vi er gucci uden

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.


Brug korte beskrivelser, som i eksemplerne herover

for at udvikle vores site har vi: 
- hentet opskrifter fra API.
- dynamisk visning af opskrifer.
- filtreret visningen af opskrifter ud fra bruger interaktion.
- visning af mealtypes som links til filtrering.
- detajleret visning af bruger valgt  opskrift.
- vising af lignene opskrifter baseret på kategori


# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

brugte API endpoints på sitet
- https://dummyjson.com/recipes
- https://dummyjson.com/recipes/id


# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```


vores funktion
funktionen bruges på recipe_list.html

Parametre:
- funktionen bruger parametre som "recipes" som bliver indlæst 

Returnere:
- vi har ikke en funktion som der returnere, kun som manipulere data fra json og funktioner.



```javascript
//funktionens kode:
function showList(recipes) {
  document.querySelector("h2").innerHTML = `<h2>${myMealType}</21>`;

  const markup = recipes
    .map(
      (recipe) => `<div class="recipe">
        <a href="single_recipe.html?id=${recipe.id}">
          <img src="${recipe.image}" alt="photo of ${recipe.name}" />
          <div class="recipe-info">
            <p>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min &#9202;</p>
            <h3>${recipe.name}</h3>
            <p>${recipe.mealType}</p>
          </div>
        </a>
       </div>
  `
    )
    .join("");
  recipeContainer.innerHTML = markup;
}
//funktionen bliver kaldt i slutningen af "function filter(cuisine)"
  showList(filtered);

```

