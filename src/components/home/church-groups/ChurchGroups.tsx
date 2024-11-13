import { churchGroups } from "@/lib/dummy-data";
import React from "react";
import ChurchGroupCard from "./ChurchGroupCard";

export default function ChurchGroups() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900">
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="font-dela_gothic tracking-wider text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
						Weekly Gatherings
					</h1>
					<p className="font-dela_gothic tracking-wider text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
						Join us throughout the week as we worship, learn, and grow together
						in faith.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
					{churchGroups.map((group, index) => (
						<ChurchGroupCard
							key={index}
							description={group.description}
							imageUrl={group.imageUrl}
							location={group.location}
							name={group.name}
						/>
					))}
				</div>

				<div className="mt-16 text-center">
					<p className="text-gray-600 dark:text-gray-300">
						All are welcome to join our community events.
						<br />
						<span className="text-amber-600 font-semibold">
							Come grow with us!
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
