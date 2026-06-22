import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Updates | Labour Direct",
  description: "Stay informed on sector updates, regional reports, and localized listening initiatives across all thirty six states.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
