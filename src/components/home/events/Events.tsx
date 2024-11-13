"use client";
import React from "react";
import { Calendar } from "../../ui/calendar";
import { TailSpin } from "react-loading-icons";
import useEventQuery from "@/lib/queries/calendar-queries";
import ErrorCard from "./ErrorCard";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import EventCard from "./EventCard";
import NoEvent from "./NoEvent";

export default function Events() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const { data, isLoading, error } = useEventQuery(date && formatDate(date));
	const { toast } = useToast();

	React.useEffect(() => {
		if (typeof window !== "undefined") setDate(new Date());
		if (error)
			toast({
				title: "Error fetching data",
				description: error.message,
			});
	}, [error, toast]);
	console.log("DATA", data, "ERROR", error);

	return (
		<section className="w-full pt-10 pb-20" id="events">
			<h2 className="px-4 text-4xl font-dela_gothic my-6 mx-auto w-max">
				Events
			</h2>
			<div className="w-full h-full grid grid-cols-2">
				<div>
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border text-center shadow ml-10 grow w-max pr-10"
					/>
				</div>
				<div>
					<div className="flex flex-col gap-4 items-center justify-center h-full">
						{isLoading ? (
							<TailSpin stroke="#000" />
						) : data ? (
							data.records.length > 0 ? (
								<EventCard
									title={data.records[0].fields.Name}
									date={data.records[0].fields.Date}
									time="4:00 PM - 9:00 PM"
									location="Main Campus"
									description="Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner."
									imageUrl="/youth.jpeg"
								/>
							) : (
								<NoEvent date={date!.toLocaleDateString()} />
							)
						) : (
							error?.message && (
								<ErrorCard
									message={error?.message}
									title="An Error occurred"
									actionLabel="Refresh"
								/>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
