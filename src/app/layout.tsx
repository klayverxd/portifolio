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
		<html lang="en">
			<head>
				<script defer src="https://cloud.umami.is/script.js" data-website-id="62fda81a-04be-4942-9ae1-c578f543050a"></script>
			</head>
			<body
				className={`${koulenRegular.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
