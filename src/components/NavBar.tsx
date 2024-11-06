import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import AnimatedBackground from "./motion-primitives/AnimatedBackground";
import { cn } from "@/lib/utils";

export default function NavBar() {
	const Tabs = [
		{ name: "Home", link: "/", styles: "" },
		{ name: "About Us", link: "/about-us", styles: "" },
		{ name: "Contact Us", link: "#contact-us", styles: "" },
		{
			name: "Donate",
			link: "donate",
			styles:
				"px-4 py-2 rounded-lg bg-transparent border border-primary-blue text-primary-blue",
		},
	];
	return (
		<nav className="static flex items-center justify-between gap-10 font-semibold py-4 px-20">
			<Link href={"/"}>
				<Image
					src={"/logo-no-bg.png"}
					width={60}
					height={60}
					alt={"Evangelical Church Winning All logo"}
				/>
			</Link>
			<div className="flex items-center gap-10 max-[920px]:gap-5 max-mlg:hidden">
				{" "}
				<AnimatedBackground
					defaultValue={Tabs[0].name}
					className="rounded-lg bg-zinc-400 pt-4 dark:bg-zinc-800"
					transition={{
						type: "spring",
						bounce: 0.2,
						duration: 0.3,
					}}
					enableHover
				>
					{Tabs.map((tab, index) => (
						<Link
							href={tab.link}
							key={"nav" + index}
							data-id={tab}
							type="button"
							className={cn(
								"px-4 py-1 transition-colors duration-300",
								tab.styles
							)}
						>
							{tab.name}
						</Link>
					))}
				</AnimatedBackground>
			</div>
			<MobileMenu />
		</nav>
	);
}
