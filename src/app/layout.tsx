import type { Metadata } from "next";
import { Koulen } from "next/font/google";

import "./globals.css";

const koulenRegular = Koulen({
	variable: "--font-koulen-regular",
	subsets: ["latin"],
	weight: "400",
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
				className={`${koulenRegular.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
