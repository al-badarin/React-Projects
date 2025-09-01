# 🛒 React Shopping Cart Store

A clean, fast **React + Vite** storefront with a context-powered shopping cart. Browse products, add items, adjust quantities, and review your cart inside a modal — all with real‑time totals and a smooth UX.

This project is part of the **React Projects** series.

![Shopping Cart Preview](./preview.png)

---

## 🌐 Live Demo

[![Netlify](https://img.shields.io/badge/Live%20Site-Click%20Here-brightgreen?style=for-the-badge&logo=netlify)](https://boutique-shopping-cart-albadarin.netlify.app/)

Responsive across desktop, tablet, and mobile 📱

---

## 📺 Demo Preview

[![Watch the video](https://img.shields.io/badge/▶%EF%B8%8F-Click%20to%20Watch%20Demo-purple?style=for-the-badge&logo=youtube)](https://youtu.be/GR4zSPo6t7o)

---

## ✨ Features

- **Global cart state** via React **Context API** (`CartContextProvider`)
- **Modal cart** rendered with **Portals** and native `<dialog>`
- **Add / increment / decrement** item quantities
- **Derived cart total** with precise currency formatting
- **Product list** generated from local data (`DUMMY_PRODUCTS`)
- **Cart badge** showing live quantity in the header

> Note: State is managed client‑side for simplicity. You can extend it with localStorage or a backend API.

---

## 🧠 What I learned and applied

- **Context API** for shared cart state (`useContext`)
- **Refs + Imperative Handle** (`useRef`, `forwardRef`, `useImperativeHandle`) to open the modal from the header
- **Portals** (`createPortal`) to mount the cart modal outside the app root
- **List rendering & keys** when mapping products and cart items
- **Derived state** for computing totals instead of storing them
- **Component composition** and separation of concerns

---

## 🛠️ Tech Stack

| Technology                                                                        | Description               |
| --------------------------------------------------------------------------------- | ------------------------- |
| ![React](https://img.shields.io/badge/React-18-blue?logo=react)                   | UI library                |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript) | App logic & interactivity |
| ![JSX](https://img.shields.io/badge/JSX-HTML--in--JS-blueviolet?logo=html5)       | Component markup          |
| ![CSS](https://img.shields.io/badge/CSS-Custom-blue?logo=css3)                    | Styling                   |
| ![Vite](https://img.shields.io/badge/Vite-Bundler-646cff?logo=vite)               | Dev server & build tool   |

---

## 📁 Project Structure

```txt
06-shopping-cart-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartModal.jsx
│   │   ├── Header.jsx
│   │   ├── Product.jsx
│   │   └── Shop.jsx
│   ├── store/
│   │   └── shopping-cart-context.jsx
│   ├── App.jsx
│   ├── dummy-products.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

**Key Components & Flow**

- `CartContextProvider` – Holds cart items and exposes `addItemToCart` & `updateItemQuantity`.
- `Header` – Displays brand + **Cart (count)** button; opens modal via an imperative ref.
- `CartModal` – Portal + native `<dialog>` wrapper; renders `<Cart />` & action buttons.
- `Cart` – Lists items, +/- quantity controls, and shows the **total price**.
- `Shop` – Section layout for products.
- `Product` – Product card with **Add to Cart**.
- `DUMMY_PRODUCTS` – Local data source for the product list.

---

## 🚀 Getting Started

### 1) Clone & Install

```bash
# Clone the repository
git clone https://github.com/al-badarin/React-Projects.git
cd React-Projects/06-shopping-cart-store

# Install dependencies
npm install
```

### 2) Run Dev Server

```bash
npm run dev
```

### 3) Build & Preview

```bash
npm run build
npm run preview
```

> Requires a recent Node.js (LTS) version.

---
