'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("Registrasi berhasil!");
      router.push("/login");
    } else {
      alert("Email sudah terdaftar!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm w-full">
      <h2 className="text-xl font-semibold">Register</h2>
      <input type="text" placeholder="Name" required
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border px-3 py-2 rounded"
      />
      <input type="email" placeholder="Email" required
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full border px-3 py-2 rounded"
      />
      <input type="password" placeholder="Password" required
        onChange={e => setForm({ ...form, password: e.target.value })}
        className="w-full border px-3 py-2 rounded"
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Daftar
      </button>
    </form>
  );
}
