import bcrypt from "bcryptjs";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [];

// Simpan user baru
export function registerUser(name: string, email: string, password: string): boolean {
  const existingUser = users.find(u => u.email === email);
  if (existingUser) return false;

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  });

  return true;
}
