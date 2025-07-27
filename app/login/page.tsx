'use client';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      ...form,
      redirect: false,
    });

    if (res?.ok) router.push('/dashboard');
    else setErrorMsg("Email atau password salah.");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold">Login</h2>
      {error && errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border rounded"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border rounded"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
}
