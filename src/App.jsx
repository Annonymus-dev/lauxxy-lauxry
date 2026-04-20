import { useState } from "react";
import tee from "/images/tee.jpg";
import hoodie from "/images/hoodie.jpg";
import jacket from "/images/jacket.jpg";

const products = [
  { id: 1, name: "Lauxxy Luxury Tee", price: 25000, image: tee },
  { id: 2, name: "Lauxxy Luxury Hoodie", price: 45000, image: hoodie },
  { id: 3, name: "Lauxxy Luxury Jacket", price: 70000, image: jacket }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");

  const addToCart = (item) => setCart([...cart, item]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: 20 }}>
      
      {/* HERO */}
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h1 style={{ fontSize: 40, letterSpacing: 2 }}>LAUXXY LUXURY</h1>
        <p style={{ color: "gray" }}>Premium Streetwear Brand</p>
      </div>

      {/* PRODUCTS */}
      <h2>Shop Collection</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        {products.map((p) => (
          <div key={p.id} style={{ background: "#111", padding: 15, borderRadius: 10 }}>
            <img src={p.image} style={{ width: "100%", borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p>₦{p.price}</p>
            <button onClick={() => addToCart(p)} style={{ padding: 10, width: "100%" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div style={{ marginTop: 40 }}>
        <h2>Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p style={{ color: "gray" }}>Cart is empty</p>
        ) : (
          cart.map((c, i) => (
            <p key={i}>{c.name} - ₦{c.price}</p>
          ))
        )}

        <h3>Total: ₦{total}</h3>

        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, width: "100%", marginTop: 10 }}
        />

        <button style={{ padding: 12, width: "100%", marginTop: 10, background: "gray", color: "white", border: "none", borderRadius: 6 }}>
          Pay Now
        </button>
      </div>
    </div>
  );
}