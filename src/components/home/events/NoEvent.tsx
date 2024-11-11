import Image from "next/image";
import React from "react";

export default function NoEvent({ date }: { date: string }) {
	return (
		<div className="w-full h-full text-center flex flex-col items-center justify-center">
			<Image
				src="/no-event-calendar.jpg"
				alt="No Event"
				width={400}
				height={400}
			/>
			<h3 className="text-3xl font-bold text-primary-dark-blue">
				NO EVENTS SCHEDULED FOR
			</h3>

			<p className="text-2xl font-bold text-primary-dark-blue">{date}</p>
		</div>
	);
}
