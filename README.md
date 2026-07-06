# 🍔 QuickBite

A responsive food delivery web application built with vanilla HTML, Tailwind CSS v4, and JavaScript. QuickBite lets users browse a variety of food items, add them to a cart, manage favorites, track order history, and more — all without a backend, using localStorage for data persistence.

---

## 📸 Screenshots

> _Add screenshots of your app here_

---

## ✨ Features

- 🗂️ **Category Filtering** — Filter food items by category (Pizza, Burgers, desserts, etc.)
- 🔍 **Search Bar** — Search products by name in real time
- 🃏 **Card Flip Animation** — Click a card to flip it and view product details on the back
- 🛒 **Cart System** — Add items to cart, remove them, and view a running total
- ❤️ **Favorites** — Mark items as favorites with a heart toggle that persists across reloads
- 📦 **Order History** — Completed orders are saved and viewable on a dedicated history page
- 📍 **Reverse Geocoding** — Detects user location and converts coordinates to a readable address using the Nominatim API
- 🎠 **Auto-Sliding Carousel** — Smooth card flipping animation for displaying the remaining food item details
- 🔊 **Sound Effects** — UI sounds on button interactions for a richer experience
- 💾 **LocalStorage Persistence** — Cart, favorites, order history, and address all persist across page reloads

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and markup |
| Tailwind CSS v4 | Styling and layout |
| Vanilla JavaScript | All interactivity and logic |
| LocalStorage | Client-side data persistence |
| Font Awesome | Icons throughout the UI |
| Nominatim API | Reverse geocoding for location |
| Local JSON | Food item data source |

---

## 📁 Project Structure

```
dist/
├── sound_effects/      # Audio files for UI interactions
├── images/             # For background texture and images
├── cart.html           # Shopping cart page
├── cart.js             # Cart page logic
├── data.json           # Local food items data
├── favorites.html      # Favorites page
├── index.html          # Main product listing page
├── index.js            # Index page logic
├── login.html          # Login page
├── login.js            # Login page logic
├── order-history.html  # Order history page
├── output.css          # Compiled Tailwind CSS
├── src/ 
    └── input.css       # Tailwind source file

---

## 🚀 Getting Started

### Prerequisites
- A modern browser (Chrome, Firefox, Edge)
- [Node.js](https://nodejs.org/) installed
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (VS Code)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Armaan-official/simplilearn_fsd_projects_Md_Armaan_Khan.git
cd Online_Food_Ordering_Application
```

2. **Install Tailwind CSS:**
```bash
npm install -D tailwindcss @tailwindcss/cli
```

3. **Start the Tailwind watch build:**
```bash
6.	npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

4. **Open `login.html` with Live Server**

---

## 📦 LocalStorage Keys

| Key | Description |
|---|---|
| `cart` | Items currently in the cart |
| `favoriteFoods` | Items marked as favorites |
| `orderHistory` | List of completed orders |
| `displayAddress` | User's last detected address |

---

## 🔮 Future Improvements

- [ ] Backend integration with a real database
- [ ] User authentication and accounts
- [ ] Quantity controls in the cart
- [ ] Payment gateway integration
- [ ] Ratings and reviews for food items
- [ ] Dark mode support
- [ ] PWA support for mobile installation

---

## 👤 Author

**Md Armaan Khan**

---

## 📄 License

This project is open source.
