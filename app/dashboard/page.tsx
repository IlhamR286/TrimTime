'use client';
import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      {session ? (
        <>
          <p>Selamat datang, {session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Memuat sesi...</p>
      )}
    </div>
  );
}
