"use client";
import React from "react";
import { Calendar } from "../ui/calendar";

export default function Events() {
	const [date, setDate] = React.useState<Date | undefined>();

	React.useEffect(() => {
		if (typeof window !== "undefined") setDate(new Date());
	}, []);
	return (
		<section className="w-full h-[80dvh] grid grid-cols-2">
			<div>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border text-center shadow mt-10 ml-10 grow w-max pr-10"
				/>
			</div>
		</section>
	);
}
