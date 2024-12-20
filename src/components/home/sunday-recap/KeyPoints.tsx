import React from "react";

const Card = ({ keyPoints }: { keyPoints: string[] }) => {
	return (
		<div className="w-full h-full pt-10 ">
			<div className="h-full rounded-2xl bg-white p-3 shadow-lg shadow-blue-500/20">
				<div className="relative h-full flex flex-col items-center rounded-xl bg-[#ecf0ff] p-5 pt-10">
					<p className="text-xl font-semibold">Notes</p>
					<ul className="mt-4 flex w-full flex-col space-y-5">
						{keyPoints.map((data, index) => (
							<li
								key={"key-point-" + index}
								className="flex items-center gap-3"
							>
								<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1fcac5]">
									<svg
										height={14}
										width={14}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										className="text-white"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path
											fill="currentColor"
											d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
										/>
									</svg>
								</span>
								<span className="text-[#425275] w-11/12">{data}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Card;
