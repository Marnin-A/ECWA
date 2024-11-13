import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

type Props = {
	name: string;
	description: string;
	imageUrl: string;
	location: string;
};

export default function ChurchGroupCard(props: Props) {
	return (
		<div>
			<div className="group bg-[#FFF5EB] rounded-3xl overflow-hidden transition-transform hover:-translate-y-1">
				<div className="aspect-[4/3] overflow-hidden">
					<Image
						src={props.imageUrl}
						alt={props.name}
						width={400}
						height={300}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="p-6">
					<h3 className="text-xl font-bold uppercase tracking-wide text-center mb-4">
						{props.name}
					</h3>
					<div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
						<MapPin className="h-4 w-4" />
						<span>{props.location}</span>
					</div>
					<p className="text-sm text-gray-600 text-center mb-6">
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
}
