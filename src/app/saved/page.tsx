"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SavedPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new dashboard page which handles saved items
    router.replace('/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
