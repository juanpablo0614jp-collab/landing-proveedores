"use client";

import { DemoStoreProvider } from "@/context/DemoStore";

export default function DemoGroupLayout({ children }: { children: React.ReactNode }) {
  return <DemoStoreProvider>{children}</DemoStoreProvider>;
}
