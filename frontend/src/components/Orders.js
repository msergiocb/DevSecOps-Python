import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ item: "", quantity: 1, price: 0 });

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/orders", form);
      setForm({ item: "", quantity: 1, price: 0 });
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Orders</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Item" value={form.item} onChange={e => setForm({...form, item: e.target.value})} required />
        <input type="number" placeholder="Quantity" value={form.quantity} onChange={e => setForm({...form, quantity: parseInt(e.target.value)})} required />
        <input type="number" step="0.01" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: parseFloat(e.target.value)})} required />
        <button type="submit">Create</button>
      </form>

      <ul>
        {orders.map(o => (
          <li key={o.id}>{o.id} — {o.item} — qty: {o.quantity} — ${o.price}</li>
        ))}
      </ul>
    </div>
  );
}
