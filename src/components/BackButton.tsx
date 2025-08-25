"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="ml-2 md:ml-4 px-4 py-2 rounded-xl bg-yellow text-black font-semibold hover:bg-yellow/80 transition-all cursor-pointer"
    >
      ← Go Back
    </button>
  );
}
