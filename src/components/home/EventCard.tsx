import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface EventCardProps {
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
	imageUrl: string;
}

export default function EventCard({
	title = "Youth Winter Retreat 2024",
	date = "December 15, 2024",
	time = "4:00 PM - 9:00 PM",
	location = "Main Campus",
	description = "Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
	imageUrl = "/placeholder.svg",
}: EventCardProps) {
	return (
		<Card className="w-9/12 group overflow-hidden border-[#696D80]/20 bg-white transition-all hover:border-[#E3F37A]">
			<div className="relative aspect-[16/9] overflow-hidden">
				<Image
					src={imageUrl}
					alt={title}
					width={600}
					height={300}
					className="object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<CardHeader className="space-y-2">
				<div className="space-y-1">
					<h3 className="text-xl font-bold text-[#01023B]">{title}</h3>
					<div className="flex flex-col gap-2 text-sm text-[#696D80]">
						<div className="flex items-center gap-2">
							<CalendarDays className="h-4 w-4" />
							<span>{date}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="h-4 w-4" />
							<span>{time}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							<span>{location}</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-[#696D80]">{description}</p>
			</CardContent>
		</Card>
	);
}
