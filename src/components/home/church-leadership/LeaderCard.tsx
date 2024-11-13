import React from "react";
import Image from "next/image";
type Props = {
	name: string;
	title: string;
	image: string;
};
export default function MainLeaderCard(props: Props) {
	return (
		<div
			className={
				"flex flex-col items-center justify-self-center justify-center gap-5 rounded-lg " +
				(props.title === "Reverend" || props.title === "Pastor"
					? "w-64 h-[350px] bg-primary-dark-blue text-white"
					: "w-56 h-[300px] bg-white text-primary-dark-blue")
			}
		>
			<Image
				src={props.image}
				alt={""}
				height={200}
				width={200}
				className="rounded-full"
			/>
			<div className="flex flex-col items-center justify-center">
				<div className="text-xl">{props.name}</div>
				<div className="text-lg font-mono">{props.title}</div>
			</div>
		</div>
	);
}
