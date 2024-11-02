import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
				<div className="max-w-5xl space-y-8">
					<h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
						Welcome to the One Big United Happy Family
					</h1>
					<p className="mx-auto max-w-3xl text-lg text-gray-200 sm:text-xl">
						Join us in building a community of faith, love, and fellowship where
						everyone belongs.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							asChild
							size="lg"
							className="bg-white text-gray-900 hover:bg-gray-100"
						>
							<Link href="/visit">Plan Your Visit</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white/10"
						>
							<Link href="/watch">Watch Online</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
