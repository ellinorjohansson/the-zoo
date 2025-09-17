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

