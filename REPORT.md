# 📌 Rättningsrapport – fed24d-the-zoo-ellinorjohansson

## 🎯 Uppgiftens Krav:
# 🦁 The ZOO

This project is a web application where users can explore a zoo, view animals, and feed them.  
The focus is on UI/UX, modern styling, and the use of React concepts such as routing, context, and reducers.

The application is built with React, uses SCSS for styling, and fetches live animal data from an external API.

[Link to live version](https://medieinstitutet.github.io/fed24d-the-zoo-ellinorjohansson/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Authors](#authors)

## Features
- **Routing with React Router**
  - Uses layouts, child routes, and error pages correctly.
  - Navigation between home, overview, and detail pages.

- **Animal Overview**
  - Displays all animals with image, name, and short description.
  - Shows animal feeding status (satisfied, hungry, or in desperate need).
  - Correctly handles broken image links.

- **Animal Detail Page**
  - Shows more detailed information about a single animal.
  - Feeding button logic:
    - If the animal has not been fed in the last **4 hours** → button is clickable.  
    - If the animal has been fed within **4 hours** → button is disabled.  
    - If the animal has not been fed in **3 hours** → a warning is shown.  

- **Overview Page Feeding Status**
  - If not fed in **3 hours** → subtle warning.  
  - If not fed in **5 hours** → strong alert that the animal needs food.

- **Feeding System**
  - Feeding time is stored and updated correctly.  
  - When returning to an animal’s page, feeding is reset if conditions are met.

- **State Management**
  - Uses **Context API** to share data across components.  
  - Uses **Reducers** for managing animal state instead of plain state.
  - Data fetching with custom hook.

- **Styling & Animations**  
  - Responsive layout for desktop, tablet, and mobile.  
  - Subtle animations on button clicks, route changes, and component mounting.

## Tech Stack

- ![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)

## Installation

Install fed24d-the-zoo-ellinorjohansson locally with npm

```bash
# Clone this repository
$ git clone https://github.com/Medieinstitutet/fed24d-the-zoo-ellinorjohansson

# Go into the repository
$ cd fed24d-the-zoo-ellinorjohansson

# Install dependencies
$ npm install

# Run app
$ npm run dev
```

## Authors

- [@ellinorjohansson](https://www.github.com/ellinorjohansson)




# TAR BORT EFTER BETYG

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wHj4KLdN)
# The Zoo

I denna inlämningsuppgift kommer ni att bygga ett zoo. Zoo:t har ett antal djur som kommer behöva matas. 

Er uppgift kommer att göra en startsida till zoo:t. Denna bör vara väl genomtänkt grafiskt, ha en tydlig uppgyggnad
och använda sig av så många css-tekniker ni har lärt er som möjligt. 

På startsidan skall det någonstans finnas en länk till en djur-sida där besökare kan se vilka djur som finns och en
kort beskrivning av varje djur tillsammans med en bild. Tyvärr har några av djurens bilder blivit fel och dessa behöver
ni hantera på ett bra sätt. 

När en användare klickar på ett djur kommer användaren till en djur-sida där bara ett djur presenteras. Här kommer det
finnas mer information om djuret än det fanns på översiktssidan. Presentationen bör fortfarande hanteras på ett bra sätt
genom olika css-tekniker som ni har lärt er. 

På djursidan kommer det att finnas en knapp för att mata ett djur. Följande regler gäller för matningen av ett djur:

- Om ett djur inte har fått mat på fyra timmar skall knappen Mata gå att klicka på.
- Om ett djur har fått mat inom fyra timmar skall knappen vara oklickbar.
- När ett djur inte har fått mat på tre timmar skall en indikation på att djuret snart behöver matas visas.

På översiktssidan för djuren skall det också vara synligt om ett djur är mätt, hungrigt eller i desperat behov av mat. 
Men på denna översiktssida är tiderna lite annorlunda än för detaljsidan. Här gäller

- Om ett djur inte fått mat på tre timmar skall det visas en varning om att djuret snart behöver mat. 
- Om ett djur inte har fått mat på fem timmar skall det visas en notis om att nu behöver djuret matas. 

Exakt hur ni löser detta kommer att vara upp till er. Men, stäm av er lösning med mig så att jag kan komma med
förslag eller idéer om hur ni skulle kunna göra den annorlunda vid behov. 

Djuren finns på följande url: https://animals.azurewebsites.net/api/animals

## Betygskriterier

### Betyg G

- Ni skall använda en router för att visa olika sidor i er applikation. 
- I er routerlösning skall ni kunna använda olika koncept såsom layouts, child-routes och error-element korrekt.
- Ni behöver visa en översiktssida för djuren där det går att klicka på ett djur. 
- Ni skall kunna mata ett djur på djur-detaljsidan och spara tiden när djuret matades. 
- Ni hanterar trasiga bild-länkar korrekt.
- Ni behöver använda någon annan teknik än ren css för styling i denna uppgift. Det kan vara tailwind, scss, material ui eller någonting annat. 

### Betyg VG

- Samtliga krav från betyg G skall vara uppfyllda. 
- Ni behöver välja att antingen hämta data med hjälp av begreppet tjänster eller en custom hook. 
- Ni behöver använda er av context istället för props för att kommunicera mellan komponenter. 
- Ni behöver använda er av reducers istället för state för hanteringen av djur. 
- När ni har matat ett djur och kommer tillbaka till djur-sidan skall eventuellt matningen nollställas, om rätt villkor angående tiderna här ovan stämmer. 
- På översiktsidan skall djurens status presenteras på ett diskret sätt beroende på tiderna beskriva här ovan. 
- Ni använder er av subtila animeringar vid klick på knappar, eventuellt sidladdningar och route-förändringar samt där ni känner att det behövs

## Övrigt

Kom ihåg att stämma av de idéer ni har med mig innan ni börjar koda. Ofta finns det någonting som behöver itereras några gånger och det är bra att göra
detta innan ni kommer för långt i er tänkta lösning. 

Rita gärna upp er lösning så ni enklare förstår hur ni skall dela upp era komponenter och förstå hur kommunikationen mellan komponenter sker.

Välj en teknik gällande css som ni antingen vill lära er mer om eller som ni tycker är rolig och håll er till ert val genom projektet, även om det verkar som att saker inte fungerar som ni vill. Det kan vi lösa tillsammans. 

Ha roligt, skratta och lär er massor!


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-the-zoo-ellinorjohansson\src\hooks\useAnimalHook.ts - no-console - Unexpected console statement.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för VG-graderingen. Studenten har framgångsrikt implementerat alla nödvändiga funktioner som specificeras i uppgiften och har inkluderat avancerade koncept såsom Context API, custom hooks och reducers för state management. Styling och animeringar är väl genomförda över olika skärmstorlekar.

💡 **Förbättringsförslag:**  
Koden är överlag välstrukturerad och kan underhållas enkelt. Möjliga förbättringar inkluderar: 
- Kodens läsbarhet kan förbättras genom att bryta upp större komponenter i mindre, självständiga komponenter för bättre översikt och återanvändbarhet. 
- Animationsförbättringar kan övervägas för specifika UI-element för att ge en ännu mer dynamisk användarupplevelse. 
- Felhanteringen vid datahämtning kan förbättras genom att tillhandahålla användarvänliga meddelanden eller återhämtningslösningar om nätverksproblematik uppstår.