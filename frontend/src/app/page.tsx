import { A } from "@/app/a";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}><A /></Suspense>
  )
}
