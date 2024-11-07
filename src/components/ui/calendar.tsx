"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = React.forwardRef(
	(
		{ className, classNames, showOutsideDays = true, ...props }: CalendarProps,
		ref
	) => {
		return (
			<div ref={ref as React.LegacyRef<HTMLDivElement>}>
				<DayPicker
					showOutsideDays={showOutsideDays}
					className={cn("p-3", className)}
					classNames={{
						months:
							"relative flex flex-col sm:flex-row space-y-4 sm:space-x-11 sm:space-y-0 pl-0 w-max",
						month: "mr-4 space-y-4",
						caption: "flex w-full justify-center pt-1 relative items-center",
						caption_label: "text-xl font-bold mx-auto",
						nav: "absolute space-x-1 flex items-center justify-between w-full pt-2 pl-4",
						nav_button: cn(
							buttonVariants({ variant: "outline" }),
							"absolute h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
						),
						nav_button_previous: "pl-10",
						nav_button_next: "",
						weekday: "text-center",
						weekdays: "flex justify-between px-7 pt-4",
						table: "w-max border-collapse space-y-1",
						head_row: "relative flex",
						head_cell:
							"text-muted-foreground rounded-md w-20 font-normal text-[0.8rem]",
						row: "flex w-full mt-2",
						cell: "h-auto w-auto text-center text-xl p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
						day: cn(
							buttonVariants({ variant: "ghost" }),
							"h-max w-max p-0 font-normal aria-selected:opacity-100"
						),
						day_button: "w-20 h-20",
						day_range_end: "day-range-end",
						day_selected:
							"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
						day_today: "bg-black text-accent-foreground",
						today: "bg-black text-white",
						day_outside:
							"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
						day_disabled: "text-muted-foreground opacity-50",
						day_range_middle:
							"aria-selected:bg-accent aria-selected:text-accent-foreground",
						day_hidden: "invisible",
						...classNames,
					}}
					components={{
						IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
						IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
					}}
					{...props}
				/>
			</div>
		);
	}
);
Calendar.displayName = "Calendar";

export { Calendar };
