import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Platform | Labour Direct",
  description: "Six integration pillars designed to coordinate economic planning, resource deployment, and civic monitoring across Nigeria.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
