import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectors | Labour Direct",
  description: "Explore the pre loaded sector planning engines, budgets, and milestones built into Labour Direct.",
};

export default function SectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
