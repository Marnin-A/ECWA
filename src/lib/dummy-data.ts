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

export const churchGroups = [
	{
		name: "Youth Group",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/youth.jpeg",
		location: "Main Campus",
	},
	{
		name: "Men's Group",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/men.jpeg",
		location: "Main Campus",
	},
	{
		name: "Women's Group",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/women.jpeg",
		location: "Main Campus",
	},
	{
		name: "Children's Group",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/children.jpeg",
		location: "Main Campus",
	},
	{
		name: "Youth Fellowship",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/youth.jpeg",
		location: "Main Campus",
	},
	{
		name: "Men's Fellowship",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/men.jpeg",
		location: "Main Campus",
	},
	{
		name: "Women's Fellowship",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/women.jpeg",
		location: "Main Campus",
	},
	{
		name: "Children's Fellowship",
		description:
			"Join us for an evening of worship, fellowship, and spiritual growth at our annual youth winter retreat. Activities include worship sessions, group discussions, and dinner.",
		imageUrl: "/children.jpeg",
		location: "Main Campus",
	},
];
