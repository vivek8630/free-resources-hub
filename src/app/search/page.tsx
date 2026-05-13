import { Suspense } from "react";
import SearchClient from "./search-client";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-40 pb-20 container mx-auto px-6 text-center text-text-gray">
          Loading search…
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
