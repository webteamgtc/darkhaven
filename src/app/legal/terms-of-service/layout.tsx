import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Darkhaven | Service Agreement & Usage Policies",
  description:
    "Darkhaven's Terms of Service govern the use of our technology platform, covering service descriptions, intellectual property, liability limitations, and termination policies.",
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}