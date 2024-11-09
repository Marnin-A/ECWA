import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#01023B] text-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-7xl font-bold tracking-tighter sm:text-8xl">
							404
						</h1>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Page Not Found
						</h2>
					</div>
					<p className="max-w-[600px] text-[#696D80] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
						exist. It might have been moved or deleted.
					</p>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Button
							asChild
							className="inline-flex h-10 items-center justify-center rounded-md bg-[#E3F37A] px-8 text-sm font-medium text-[#01023B] shadow transition-colors hover:bg-[#E3F37A]/90"
						>
							<Link href="/">
								<Home className="mr-2 h-4 w-4" />
								Go to Homepage
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="inline-flex h-10 items-center justify-center rounded-md border border-[#E3F37A] bg-transparent px-8 text-sm font-medium text-[#E3F37A] shadow-sm transition-colors hover:bg-[#E3F37A] hover:text-[#01023B]"
						>
							<Link href="/#events">
								<ChevronLeft className="mr-2 h-4 w-4" />
								Back to Events
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
