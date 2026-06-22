import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Labour Direct | The Operating System for Nigerian Government",
  description: "Learn about the Labour Direct platform, developed by the Labour Institute of Nigeria, governed by the NLC and TUC.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
