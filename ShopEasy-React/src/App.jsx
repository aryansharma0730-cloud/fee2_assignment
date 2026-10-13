import { useMemo, useReducer, useState } from 'react'
import { cartReducer, initialCartState } from './cartReducer.js'
import { products } from './data/products.js'

const money = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)
  const [activeCategory, setActiveCategory] = useState('All')
  const [notice, setNotice] = useState('')

  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const visibleProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  const itemCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  )
  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  )
  const shipping = subtotal === 0 || subtotal >= 3000 ? 0 : 99
  const total = subtotal + shipping

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', product })
    setNotice(`${product.name} added to your cart`)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="ShopEasy home">
          <span className="brand-mark">S</span>
          <span>Shop<span className="brand-light">Easy</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a className="nav-active" href="#shop">Shop</a>
          <a href="#cart">Your cart</a>
        </nav>
        <a className="cart-pill" href="#cart" aria-label={`Cart with ${itemCount} items`}>
          <span className="cart-icon">🛍</span>
          <span>Cart</span>
          <span className="cart-count">{itemCount}</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> THE EVERYDAY EDIT</p>
            <h1>Good finds.<br /><span>Better prices.</span></h1>
            <p className="hero-description">
              Thoughtful picks for your everyday life. Find your next favourite thing.
            </p>
            <a className="primary-button hero-button" href="#shop">Explore products <span>↘</span></a>
            <div className="hero-proof">
              <span className="proof-avatars"><i>😊</i><i>😎</i><i>🙂</i></span>
              <span><strong>2,000+</strong> happy shoppers</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-sun" />
            <div className="art-card art-card-one"><span>🎧</span><small>LISTEN BETTER</small></div>
            <div className="art-card art-card-two"><span>⌚</span><small>LIVE SMARTER</small></div>
            <div className="art-circle">GOOD<br />THINGS<br /><b>INSIDE</b><span>✳</span></div>
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
          </div>
        </section>

        <section className="shop-layout" id="shop">
          <div className="catalog">
            <div className="section-heading">
              <div>
                <p className="eyebrow">MADE FOR YOU</p>
                <h2>Shop the collection</h2>
              </div>
              <span className="product-count">{visibleProducts.length} products</span>
            </div>
            <div className="category-row" aria-label="Filter products by category">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-chip ${activeCategory === category ? 'selected' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="product-grid">
              {visibleProducts.map((product) => {
                const inCart = cart.find((item) => item.id === product.id)
                return (
                  <article className="product-card" key={product.id}>
                    <div className={`product-art ${product.color}`}>
                      <span className="product-emoji">{product.emoji}</span>
                      <span className="product-category">{product.category}</span>
                      {inCart && <span className="in-cart-tag">In cart · {inCart.quantity}</span>}
                    </div>
                    <div className="product-info">
                      <div className="product-title-line">
                        <h3>{product.name}</h3>
                        <strong>{money(product.price)}</strong>
                      </div>
                      <p>{product.description}</p>
                      <button className="add-button" onClick={() => addToCart(product)}>
                        <span>+</span> Add to cart
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="cart-panel" id="cart">
            <div className="cart-panel-heading">
              <div>
                <p className="eyebrow">YOUR PICKS</p>
                <h2>Your cart <span className="heading-count">{itemCount}</span></h2>
              </div>
              {cart.length > 0 && (
                <button className="text-button" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
                  Clear all
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-bag">🛍️</div>
                <h3>Your cart is taking a break</h3>
                <p>Add something you love and it’ll show up here.</p>
                <a href="#shop" className="outline-button">Start shopping <span>↗</span></a>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className={`cart-item-art ${item.color}`}>{item.emoji}</div>
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <span>{money(item.price)}</span>
                        <div className="quantity-control">
                          <button
                            aria-label={`Decrease ${item.name} quantity`}
                            onClick={() => dispatch({ type: 'DECREASE_ITEM', id: item.id })}
                          >−</button>
                          <span>{item.quantity}</span>
                          <button
                            aria-label={`Increase ${item.name} quantity`}
                            onClick={() => dispatch({ type: 'INCREASE_ITEM', id: item.id })}
                          >+</button>
                        </div>
                      </div>
                      <div className="cart-item-end">
                        <strong>{money(item.price * item.quantity)}</strong>
                        <button
                          className="remove-button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                        >Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-summary">
                  <div><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
                  <div><span>Shipping</span><strong>{shipping === 0 ? 'FREE' : money(shipping)}</strong></div>
                  {subtotal > 0 && subtotal < 3000 && (
                    <p className="shipping-hint">Add {money(3000 - subtotal)} more for free shipping.</p>
                  )}
                  <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
                  <button
                    className="checkout-button"
                    onClick={() => setNotice('Demo checkout: your cart is ready!')}
                  >Continue to checkout <span>→</span></button>
                  <p className="secure-note">♡ &nbsp; A little joy, delivered to you.</p>
                </div>
              </>
            )}
          </aside>
        </section>
      </main>

      {notice && <div className="toast" role="status">{notice}</div>}
      <footer><a className="footer-brand" href="#">ShopEasy</a><span>Little things. Better days.</span><span>Built with React useReducer ♡</span></footer>
    </div>
  )
}

export default App
