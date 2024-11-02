"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";

export function MobileMenu() {
	return (
		<div className="w-min mlg:hidden">
			<Sheet key="right">
				<SheetTrigger className="w-min flex justify-end mlg:hidden" asChild>
					<button
						type="button"
						aria-label="menu"
						aria-controls="menu"
						className="w-8 flex-col gap-1 flex"
					>
						<div className="bg-primary-blue h-[3px] w-7"></div>
						<div className="bg-primary-blue h-[3px] w-7"></div>
						<div className="bg-primary-blue h-[3px] w-7"></div>
					</button>
				</SheetTrigger>
				<SheetContent className="w-screen" side="right">
					<div className="flex flex-col gap-2 py-4 h-screen">
						<Link
							className="p-2 mt-4 text-left font-semibold text-lg justify-start hover:bg-slate-300 hover:text-accent-blue"
							href={"/"}
						>
							<SheetPrimitive.Close>Home</SheetPrimitive.Close>
						</Link>
						<Link
							className="p-2 text-left font-semibold text-lg justify-start hover:bg-slate-300 hover:text-accent-blue"
							href={"/about-us"}
						>
							<SheetPrimitive.Close>About us</SheetPrimitive.Close>
						</Link>
						<Link
							className="p-2 text-left font-semibold text-lg justify-start hover:bg-slate-300 hover:text-accent-blue"
							href={"/products"}
						>
							<SheetPrimitive.Close>Products</SheetPrimitive.Close>
						</Link>
						<Image
							src={"/horizontal_logo.png"}
							alt={""}
							width={400}
							height={100}
							className="mt-auto mb-4"
						/>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
