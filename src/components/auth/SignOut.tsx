"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <li className="list-none">
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() => signOut()}
      >
        LogOut
      </button>
    </li>
  );
}
