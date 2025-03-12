"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("../../AppRouter"), { ssr: false });

export function ClientOnly() {
  return <App />;
}
