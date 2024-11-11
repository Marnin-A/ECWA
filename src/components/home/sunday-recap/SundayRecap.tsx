"use client";
import React from "react";
import KeyPoints from "./KeyPoints";

export default function SundayRecap() {
	const [keyPoints, setKeyPoints] = React.useState([
		"The righteous shall live by their faith” the key word there is live",
		"The faith here is resting upon knowledge, the word of God. It is a type of faith that is intangible but has substance.",
		"Faith is the store house of substance yet to have a physical manifestation.",
	]);
	return (
		<div className=" bg-gray-300 h-[70dvh] font-dela_gothic p-20 pt-10">
			<h2 className="text-4xl text-center">Sunday Recap</h2>
			<div className="grid grid-cols-2 h-full">
				<div className="grid h-full items-center">
					<div>
						<span className="text-3xl">Topic: </span>
						<h3 className="text-3xl text-primary-blue leading-10">
							The righteous shall live by faith
						</h3>
					</div>
					<div>
						<span className="text-3xl">Text: </span>
						<p className="text-3xl text-primary-blue leading-10">
							Habaakuk 2:4, Hebrews 11:3, Hosea 4:6, Proverbs 23:23, 15:14,18:15
						</p>
					</div>
					<div>
						<span className="text-3xl">Preacher:</span>{" "}
						<p className="text-3xl text-primary-blue leading-10">
							Pst. Didam Luka
						</p>
					</div>
				</div>
				<KeyPoints keyPoints={keyPoints} />
			</div>
		</div>
	);
}
