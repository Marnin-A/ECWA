import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Provider from "@/components/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const roboto = localFont({
	src: [
		{ path: "./fonts/Roboto-Black.ttf", style: "normal", weight: "900" },
		{ path: "./fonts/Roboto-BlackItalic.ttf", style: "italic", weight: "900" },
		{ path: "./fonts/Roboto-Bold.ttf", style: "normal", weight: "700" },
		{ path: "./fonts/Roboto-BoldItalic.ttf", style: "italic", weight: "700" },
		{ path: "./fonts/Roboto-Italic.ttf", style: "italic", weight: "400" },
		{ path: "./fonts/Roboto-Light.ttf", style: "normal", weight: "300" },
		{ path: "./fonts/Roboto-LightItalic.ttf", style: "normal", weight: "300" },
		{ path: "./fonts/Roboto-Medium.ttf", style: "normal", weight: "500" },
		{ path: "./fonts/Roboto-MediumItalic.ttf", style: "italic", weight: "500" },
		{ path: "./fonts/Roboto-Regular.ttf", style: "normal", weight: "400" },
		{ path: "./fonts/Roboto-Thin.ttf", style: "normal", weight: "100" },
		{ path: "./fonts/Roboto-ThinItalic.ttf", style: "italic", weight: "100" },
	],
	variable: "--font-roboto",
	weight: "100 300 400 500 700 800 900",
});
const dela_gothic = localFont({
	src: "./fonts/DelaGothicOne-Regular.ttf",
	variable: "--font-dela-gothic",
	weight: "400",
});
export const metadata: Metadata = {
	title: "Evangelical Church Winning All- Kaduna",
	description:
		"The Evangelical Church Winning All (ECWA), based in Kaduna, Nigeria, is a prominent Christian denomination with a mission-focused emphasis across Nigeria and beyond. Established in 1954, ECWA grew out of the work of the Sudan Interior Mission (SIM) and is known for its commitment to evangelism, community development, and holistic ministry. ECWA operates schools, hospitals, and social programs to uplift communities, focusing on spiritual growth and social welfare. With a strong base in northern Nigeria, ECWA has expanded across the country, promoting faith, education, healthcare, and rural development through its various ministries.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} ${dela_gothic.variable} antialiased relative`}
			>
				<Provider>
					<NavBar />
					{children}
					<Toaster />
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
