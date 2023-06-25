import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/nextAuth/options";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import UserNav from "./nav/UserNav";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-slate-200">
      <Link href="/">Home</Link>
      <ul className="flex items-center gap-6">
        {session?.user && <UserNav imageSrc={session.user.image || ""} />}
        {!session?.user ? <SignIn /> : <SignOut />}
      </ul>
    </nav>
  );
}
