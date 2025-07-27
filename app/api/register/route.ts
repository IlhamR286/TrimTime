import { NextResponse } from "next/server";
import { registerUser } from "@/app/lib/users";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const success = registerUser(name, email, password);

  if (!success) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  return NextResponse.json({ message: "User registered successfully" });
}
