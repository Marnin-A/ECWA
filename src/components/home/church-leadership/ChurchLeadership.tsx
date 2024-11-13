import React from "react";
import LeaderCard from "./LeaderCard";

export default function ChurchLeadership() {
	const Leadership = {
		Pastor: { name: "Pst. Didam", img: "/youth.jpeg" },
		Reverend: { name: "Rev. Haruna Dauda", img: "/youth.jpeg" },
		Elders: [
			{ title: "Works", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Financial Secretary", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Treasurer", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Marital Counselor", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Missions", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Christian Education", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Secretary", name: "Full Name", img: "/youth.jpeg" },
			{ title: "Asst. Secretary", name: "Full Name", img: "/youth.jpeg" },
		],
	};
	return (
		<div className="flex items-center flex-col justify-center relative font-dela_gothic border tracking-wide">
			<div className="flex w-full h-full">
				<div className="flex flex-col items-center justify-start bg-gray-300 gap-14 px-10 pt-20 w-1/3">
					<h2 className="font-bold text-primary-dark-blue text-4xl">Clergy</h2>
					<div className="flex items-center justify-center gap-10">
						<LeaderCard
							key={"Reverend"}
							title="Reverend"
							name={Leadership.Reverend.name}
							image={Leadership.Reverend.img}
						/>
						<LeaderCard
							key={"Pastor"}
							title="Pastor"
							name={Leadership.Pastor.name}
							image={Leadership.Pastor.img}
						/>
					</div>
				</div>
				<div className="w-2/3 bg-primary-dark-blue ">
					<h2 className="top-10 w-full text-4xl pt-5 pb-10 text-white text-center">
						Elders
					</h2>
					<div className="w-full grid grid-cols-4 grid-rows-2 gap-y-10  items-center pb-10">
						{Leadership.Elders.map((elder, index) => (
							<LeaderCard
								key={"Elder" + index}
								title={elder.title}
								name={elder.name}
								image={elder.img}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
