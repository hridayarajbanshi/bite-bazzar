"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function NewProductForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "laptop",
  });

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.CLOUDINARY_PRESET_NAME!);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const imgData = await res.json();
    setImage(imgData.secure_url);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/admin/products", {
      method: "POST",
      body: JSON.stringify({ ...form, image }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Product created successfully!");
      window.location.reload();
    } else {
      alert("Error creating product");
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-xl w-full max-w-3xl">
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-3 rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Product Description"
          className="border p-3 rounded-lg"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-3 rounded-lg"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <select
          className="border p-3 rounded-lg"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smartphone</option>
          <option value="headset">Headset</option>
          <option value="camera">Camera</option>
        </select>

        {/* Image upload */}
        <label className="font-semibold">Product Image</label>
        <input type="file" onChange={handleImageUpload} className="mb-2" />

        {loading ? (
          <p>Uploading...</p>
        ) : image ? (
          <Image
            src={image}
            width={150}
            height={150}
            alt="Uploaded Image"
            className="rounded-lg"
          />
        ) : null}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white p-3 rounded-lg hover:bg-gray-800"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </div>
    </div>
  );
}
