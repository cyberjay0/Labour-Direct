import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Access | Labour Direct",
  description: "Request access credentials to access the Labour Direct national planning platform.",
};

export default function RequestAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
