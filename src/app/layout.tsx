import type { Metadata } from "next";
import { Geist, Geist_Mono, Koulen } from "next/font/google";

import "./globals.css";

const koulenRegular = Koulen({
	variable: "--font-koulen-regular",
	subsets: ["latin"],
	weight: "400",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Klayver Ximenes",
	description: "Portfólio Klayver Ximenes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${koulenRegular.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
