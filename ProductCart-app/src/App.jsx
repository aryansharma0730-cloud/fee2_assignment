import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro",
      category: "Smartphone",
      description:
        "Powerful smartphone with a premium design and advanced camera.",
      price: 129999,
      stock: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBk1F8rbIfj6ux1oRm3t6SD_mBPFOek3Knhs_8yDoAw&s=10",
    },
    {
      id: 2,
      name: "Samsung Galaxy S26 Ultra",
      category: "Smartphone",
      description: "Premium Android smartphone with a stunning display.",
      price: 139999,
      stock: 7,
      image:
        "https://rukminim3.flixcart.com/image/480/640/xif0q/mobile/d/0/x/-original-imahhyzrnhgzvdk4.jpeg?q=90",
    },
    {
      id: 3,
      name: "Sony WH-1000XM6",
      category: "Headphones",
      description:
        "Wireless headphones with immersive sound and comfort.",
      price: 34999,
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "MacBook Air",
      category: "Laptop",
      description:
        "Lightweight laptop designed for work, study and entertainment.",
      price: 99999,
      stock: 6,
      image:
        "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/164091-laptops-news-apple-s-macbook-air-could-be-getting-bigger-in-2023-image1-4ckrvmv5j7.jpg?w=1600&h=1200&fit=crop",
    },
    {
      id: 5,
      name: "Nike Air Max",
      category: "Footwear",
      description:
        "Comfortable everyday sneakers with a sporty design.",
      price: 12999,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Canon EOS Camera",
      category: "Camera",
      description:
        "Versatile camera for capturing detailed photographs.",
      price: 74999,
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      name: "Apple Watch",
      category: "Smartwatch",
      description:
        "Smartwatch with fitness tracking and everyday features.",
      price: 45999,
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Adidas Hoodie",
      category: "Clothing",
      description:
        "Soft and comfortable hoodie for casual everyday wear.",
      price: 3999,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 9,
      name: "JBL Bluetooth Speaker",
      category: "Audio",
      description:
        "Portable speaker delivering powerful sound anywhere.",
      price: 5999,
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 10,
      name: "Ray-Ban Sunglasses",
      category: "Accessories",
      description:
        "Classic sunglasses with a timeless and stylish design.",
      price: 8999,
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 11,
      name: "Logitech Keyboard",
      category: "Accessories",
      description:
        "Comfortable keyboard perfect for work, coding and study.",
      price: 4999,
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 12,
      name: "Levi's Denim Jacket",
      category: "Clothing",
      description:
        "Classic denim jacket designed for casual everyday outfits.",
      price: 6999,
      stock: 6,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          Aryan<span>Zon</span>
        </div>

        <div className="cart">
          🛒 <span>Cart</span>
        </div>
      </header>

      <section className="hero">
        <p className="small-title">WELCOME TO ARYANZON</p>

        <h1>
          Everything you need,
          <br />
          all in one place.
        </h1>

        <p className="hero-text">
          Explore our collection of electronics, fashion and everyday
          essentials.
        </p>
      </section>

      <main className="products-section">
        <div className="section-heading">
          <div>
            <p className="small-title">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <p className="product-count">
            {products.length} Products
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
              stock={product.stock}
              image={product.image}
            />
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 AryanZon | Made by Aryan</p>
      </footer>
    </div>
  );
}

export default App;