# Flavorly Recipe App

Flavorly is a modern, responsive recipe discovery app built with React and Tailwind CSS v4. Users can browse recipes, search by recipe name or tags, filter by category, view recipe details, save favorites, switch themes, and add their own recipes.

## Features

- Responsive recipe discovery interface
- Sample recipe data with images, categories, ratings, preparation times, and servings
- Search recipes by title, category, or tags
- Filter recipes by category
- Recipe cards with bookmark actions
- Recipe detail modal with ingredients and cooking method
- Add custom recipes through a form
- Custom recipes persist in browser `localStorage`
- Light and dark theme toggle with persisted preference
- Mobile navigation menu

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- Lucide React icons

## Project Structure

```text
project_04 preparation/
├── src/
│   ├── index.css       # Tailwind theme and application styles
│   └── main.jsx        # React components, sample data, and app logic
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Adding a Recipe

1. Select **Share a recipe** or **Add your recipe**.
2. Enter the recipe name and description.
3. Choose a category and provide preparation time and servings.
4. Add optional comma-separated tags and an image URL.
5. Select **Add recipe**.

The new recipe appears immediately in the recipe grid and is included in search and category filtering. Custom recipes are stored under the `flavorly-recipes` key in browser local storage.

## Theme Preferences

Use the theme button in the header to switch between light and dark mode. The selected theme is stored under the `flavorly-theme` key in browser local storage.

## License

This project is intended for educational and demonstration purposes.
