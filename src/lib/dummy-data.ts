type EventDetails = {
	name: string;
	date: string;
	time: string;
	description: string;
	image: string;
};
export const events: EventDetails[] = [
	{
		name: "Women Fellowship",
		date: "2021-09-01",
		time: "12:00",
		description: "Women fellowship week of prayer",
		image: "http://ecwawuse2.org/wp-content/uploads/2023/03/women-2.jpg",
	},
];

type WeeklyActivityDetails = {
	day: string;
	activity: string;
	time: string;
	icon: string;
};
export const weeklyActivities: WeeklyActivityDetails[] = [
	{ day: "Tuesday", activity: "Bible Study", time: "7:00pm", icon: "" },
	{ day: "Wednesday", activity: "Prayer meeting", time: ": 6:00pm", icon: "" },
	{ day: "Friday", activity: "Youth Fellowship", time: "7:00pm", icon: "" },
	{ day: "Saturday", activity: "Band Practice", time: "2:00pm", icon: "" },
];
