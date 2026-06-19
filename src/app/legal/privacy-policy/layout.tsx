import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Darkhaven | Data Collection, Usage & Protection Practices",
  description:
    "Darkhaven's Privacy Policy explains how we collect, use, share, and protect your personal information, your data rights, and our cookie and tracking practices.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}