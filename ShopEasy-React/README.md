# ShopEasy — React Shopping Cart

A responsive shopping cart project built with React and the `useReducer` hook.

## Features

- Add products to the cart
- Increase item quantity (`+`)
- Decrease item quantity (`−`); an item disappears at quantity zero
- Remove a product from the cart
- Clear the entire cart
- Product category filters
- Automatic subtotal, shipping, and total calculations
- Free shipping on orders of ₹3,000 or more
- Responsive layout for desktop and mobile
- Demo checkout button (no real payment processing)

## Run locally

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

## How `useReducer` works here

`src/cartReducer.js` contains the reducer. The component calls `useReducer(cartReducer, initialCartState)` and sends actions using `dispatch()`.

| Action | Purpose |
| --- | --- |
| `ADD_ITEM` | Add a product; if already present, increment its quantity |
| `INCREASE_ITEM` | Increase quantity by one |
| `DECREASE_ITEM` | Decrease quantity; remove at zero |
| `REMOVE_ITEM` | Remove one product completely |
| `CLEAR_CART` | Empty the cart |

The assignment image mentions four actions but lists five, so this project implements all five listed actions.
