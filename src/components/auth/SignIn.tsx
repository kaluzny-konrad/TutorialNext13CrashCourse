"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <li className="list-none">
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() => signIn()}
      >
        Log In
      </button>
    </li>
  );
}
