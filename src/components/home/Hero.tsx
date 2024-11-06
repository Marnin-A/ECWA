import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BorderTrail } from "../motion-primitives/BorderTrail";

export default function Hero() {
	return (
		<section className="relative h-[90dvh] min-h-[600px] w-full overflow-hidden bg-black">
			{/* Background Image */}
			<Image
				src="/church.jpg"
				alt="Church community gathering"
				width={1920}
				height={1080}
				className="absolute inset-0 h-full w-full object-cover"
				priority
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
				<div className="font-dela_gothic  max-w-5xl space-y-8">
					<h1 className="tracking-wider text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
						Welcome to the One Big United Happy Family
					</h1>
					<p className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl">
						Join us in building a community of faith, love, and fellowship where
						everyone belongs.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="relative w-max bg-primary-blue text-base tracking-widest text-white font-light hover:bg-primary-dark-blue"
						>
							<Link className="w-full h-full py-2 m-2" href="/visit">
								Join us for Service
							</Link>
							<BorderTrail
								className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
								size={50}
							/>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
