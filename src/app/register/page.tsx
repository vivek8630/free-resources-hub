"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Create an account</h1>
      <p className="text-text-gray text-center max-w-md mb-8">
        Registration is not wired in this demo build. Use{" "}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>{" "}
        to see the UI, or connect a provider (Clerk, Supabase Auth, NextAuth) when you deploy.
      </p>
      <Link href="/" className="text-sm text-text-gray hover:text-primary">
        <span className="inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </span>
      </Link>
    </div>
  );
}
