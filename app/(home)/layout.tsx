import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import '../globalicon.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'], // correspond à wght@400;700 dans ton lien
  variable: '--font-space-grotesk', // optionnel, utile avec Tailwind
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mastermind Game",
  description: "A logic and deduction game built with Next.js + Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased background-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
