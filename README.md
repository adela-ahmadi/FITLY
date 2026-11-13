<div align="center">

# FITLY

### Your wardrobe, thoughtfully organized.

A smart wardrobe manager and outfit planner that helps you organize clothing, explore combinations, and keep your favorite looks close.

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=222222)
![Project](https://img.shields.io/badge/Project-Academic%20Team%20Project-C99A47)

</div>

---

## Overview

**FITLY** is a React-based wardrobe management and outfit-planning application. It brings everyday clothing organization and outfit creation into one focused workspace.

Users can build a digital wardrobe, organize pieces by category and style attributes, generate outfit combinations for a selected season and occasion, and save clothing or complete looks to a personal favorites collection.

The interface follows an editorial-inspired visual direction, pairing a warm neutral foundation with navy and gold accents, responsive layouts, subtle motion, and reusable interface components.

## Features

### Dashboard
- At-a-glance wardrobe and saved-outfit statistics.
- Recently added clothing pieces.
- Quick access to the main areas of the application.
- Style notes and visual details that introduce the FITLY design direction.

### Wardrobe
- Add clothing with a name, category, colour, season, occasion, and optional image URL.
- Browse clothing in a visual collection.
- Search by item name, colour, category, season, or occasion.
- Filter by clothing category.
- Sort by recently added or item name.
- Add or remove clothing from favorites.
- Delete items from the collection.
- Form validation for required fields and image URLs.

### Outfit Studio
- Choose an occasion and season.
- Generate a coordinated outfit using items already in the wardrobe.
- Require a top, bottom, and shoes for a complete outfit.
- Include outerwear and accessories when suitable pieces are available.
- Name and save generated looks.
- Browse, favorite, and delete saved outfits.

### Favorites
- View favorite clothing pieces and favorite outfits in one place.
- See separate counts for favorite clothing and looks.
- Remove items from the favorites collection or delete them.

### User experience
- Responsive application shell with navigation, header, and footer.
- Reusable React components and shared styling.
- Subtle reveal animations and interactive hover states.
- Empty states and feedback messages for important interactions.

## How outfit generation works

FITLY uses a **wardrobe-based matching process** to suggest outfit combinations:

1. The user selects a season and an occasion.
2. FITLY checks the wardrobe for pieces matching those selections. Items marked **All Season** or **Any** can also qualify.
3. A complete look requires one item from each of these categories: **Tops**, **Bottoms**, and **Shoes**.
4. **Outerwear** and **Accessories** may be added when matching items are available.
5. The user can review the result, give it a name, and save it.

Recommendations are generated from the user's available wardrobe items. Outfit generation is rule-based; it does not require an external AI service.

## Technology stack

| Technology | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | Component-based user interface |
| [Vite 8](https://vite.dev/) | Development server and production build |
| [React Router 7](https://reactrouter.com/) | Client-side page navigation |
| [Lucide React](https://lucide.dev/) | Interface icons |
| JavaScript (ES modules) | Application logic |
| CSS | Responsive layouts, visual design, animations, and component styling |
| Browser Local Storage | Persistence of wardrobe items and saved outfits |
| ESLint | Code-quality and lint checks |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.19+** or **22.12+**.
- npm (included with Node.js).
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/adela-ahmadi/FITLY.git
cd FITLY
```

### 2. Install dependencies

```bash
npm ci
```

`npm ci` installs the exact dependency versions recorded in `package-lock.json`.

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (Vite normally uses `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

To verify the project before submitting changes:

```bash
npm run lint
npm run build
```

## Project structure

```text
FITLY/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                  # Local visual assets
│   ├── components/
│   │   ├── common/              # Shared motion and presentation components
│   │   ├── dashboard/           # Dashboard sections and statistics
│   │   ├── favorites/           # Favorite collection sections
│   │   ├── outfit-studio/       # Outfit controls, preview, and saved looks
│   │   ├── wardrobe/            # Wardrobe filters, grid, and empty state
│   │   ├── ClothingCard.jsx
│   │   ├── ClothingForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── OutfitCard.jsx
│   │   └── Sidebar.jsx
│   ├── data/
│   │   └── initialClothes.js    # Initial example wardrobe items
│   ├── hooks/                   # Reusable React hooks
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Wardrobe.jsx
│   │   ├── OutfitStudio.jsx
│   │   └── Favorites.jsx
│   ├── styles/
│   │   ├── components.css
│   │   ├── fitly-editorial.css
│   │   ├── global.css
│   │   └── layout.css
│   ├── App.css                  # Additional application stylesheet
│   ├── index.css                # Entry-level stylesheet
│   ├── App.jsx                  # Application routes and shared state
│   └── main.jsx                 # React application entry point
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Data and persistence

FITLY currently uses the browser's **Local Storage** for persistence:

- `fitly-items` stores wardrobe items.
- `fitly-outfits` stores saved outfit combinations.

This keeps the project simple to run without configuring a server or database. Data is stored in the current browser on the current device; it is not synchronized between browsers or users.

Clothing images can be supplied through an image URL. The application also includes example wardrobe data and a fallback image for items without a custom image.

> **Current scope:** FITLY is a frontend academic project. It does not currently include user accounts, a backend API, cloud synchronization, or a remote database.

## Team and contributions

FITLY was developed as a five-member collaborative team project. Work was divided across the application foundation and the main feature areas.

| Contributor | Main area |
| --- | --- |
| [@adela-ahmadi](https://github.com/adela-ahmadi) | Core application architecture, integration, and visual system |
| [@sataratimoori](https://github.com/sataratimoori) | Dashboard |
| [@AzadehAnwari](https://github.com/AzadehAnwari) | Wardrobe |
| [@shakibaamini](https://github.com/shakibaamini) | Outfit Studio |
| [@morsalamini](https://github.com/morsalamini) | Favorites |

Feature work was integrated through Git branches and pull requests into the main application.

## Development workflow

When contributing to the project:

1. Pull the latest changes from `main`.
2. Create a separate branch for your task.
3. Keep changes focused on the assigned feature.
4. Run `npm run lint` and `npm run build`.
5. Push the branch and open a pull request for review.

Use clear, descriptive commit messages and avoid committing generated folders such as `node_modules/` or `dist/`.

## Project goals

The project demonstrates practical use of core React concepts:

- Building reusable components and composing pages.
- Passing data and callbacks through props.
- Managing interactive state with React hooks.
- Handling forms, events, and validation.
- Sharing application state between related pages.
- Persisting data in browser storage.
- Organizing a collaborative frontend project into clear feature areas.

---

<div align="center">

**FITLY — Make more of what you already own.**

Built with React, creativity, and teamwork.

</div>
