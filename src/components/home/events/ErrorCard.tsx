"use client";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ErrorCardProps {
	title: string;
	message: string;
	actionLabel?: string;
}

export default function ErrorCard(
	{ title, message, actionLabel }: ErrorCardProps = {
		title: "An error occurred",
		message: "We're sorry, but something went wrong. Please try again later.",
		actionLabel: "Try Again",
	}
) {
	const router = useRouter();
	return (
		<Card className="w-full max-w-md border-[#E3F37A] bg-[#01023B] text-white shadow-lg">
			<CardHeader className="flex flex-row items-center gap-2">
				<AlertTriangle className="h-6 w-6 text-[#E3F37A]" />
				<CardTitle className="text-xl font-semibold">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-[#696D80]">{message}</p>
			</CardContent>
			{actionLabel && (
				<CardFooter>
					<Button
						onClick={() => router.refresh()}
						className="w-full bg-[#0127A1] text-white hover:bg-[#0127A1]/90"
					>
						{actionLabel}
					</Button>
				</CardFooter>
			)}
		</Card>
	);
}
