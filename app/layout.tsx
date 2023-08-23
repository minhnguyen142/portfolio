'use client'

import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
