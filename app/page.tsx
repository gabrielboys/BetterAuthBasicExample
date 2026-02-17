'use client';

import { authClient } from "./lib/auth-client"; //import the auth client
import Image from "next/image";





export default function Home() {
 const { data: session, isPending, error, refetch } = authClient.useSession();


  async function clickSignIn() {
  
    await authClient.signIn.social({
        provider: "google",
    });
  }

   async function clickSignOut() {
  
    await authClient.signOut();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1> Current User: {session?.user?.name}</h1>

      <h2>
      {session?.user ? (
        <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={clickSignOut}
      >
       Sign Out
      
      </button>
      ) : (
         <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={clickSignIn}
          >
          Sign In
          
          </button>
      )}</h2>
     
    </div>
  );
}
