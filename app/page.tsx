import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Selamat Datang di TrimTime</h1>
      <p className="text-lg">Platform booking cukur rambut online</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}
