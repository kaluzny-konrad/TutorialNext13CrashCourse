import Link from "next/link";
import Login from "./auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/nextAuth/options";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-slate-200">
      <Link href="/">Home</Link>
      <Login />
    </nav>
  );
}
