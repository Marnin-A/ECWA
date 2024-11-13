import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
	return (
		<footer className="bg-[#1C1F2E] text-white py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{/* Left Column - Church Info */}
					<div className="space-y-6">
						<div className="flex items-center gap-3">
							<Image
								src="/church-icon.svg"
								alt="ECWA Church"
								width={40}
								height={40}
								className="brightness-0 invert"
							/>
							<div>
								<h2 className="font-bold text-xl">ECWA CHURCH</h2>
							</div>
						</div>
						<p className="text-gray-400 text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor.
						</p>
						<div className="space-y-3">
							<div className="flex items-center gap-3 text-sm text-gray-400">
								<Phone className="h-4 w-4" />
								<span>(480) 555-0123</span>
							</div>
							<div className="flex items-center gap-3 text-sm text-gray-400">
								<MapPin className="h-4 w-4" />
								<span>4517 WASHINGTON AVE.</span>
							</div>
							<div className="flex items-center gap-3 text-sm text-gray-400">
								<Mail className="h-4 w-4" />
								<span>FINSWEET@EXAMPLE.COM</span>
							</div>
						</div>
					</div>

					{/* Middle Column - Quick Links & Connect */}
					<div className="grid grid-cols-2 gap-8">
						<div className="space-y-4">
							<h3 className="font-bold mb-6">Quicklinks</h3>
							<ul className="space-y-3 text-sm text-gray-400">
								<li>
									<Link
										href="/about"
										className="hover:text-white transition-colors"
									>
										ABOUT US
									</Link>
								</li>
								<li>
									<Link
										href="/sermons"
										className="hover:text-white transition-colors"
									>
										SERMONS
									</Link>
								</li>
								<li>
									<Link
										href="/events"
										className="hover:text-white transition-colors"
									>
										EVENTS
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="hover:text-white transition-colors"
									>
										BLOG
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="font-bold mb-6">Connect</h3>
							<div className="flex gap-4">
								<Link
									href="#"
									className="hover:text-[#F4C95D] transition-colors"
								>
									<Facebook className="h-5 w-5" />
								</Link>
								<Link
									href="#"
									className="hover:text-[#F4C95D] transition-colors"
								>
									<Twitter className="h-5 w-5" />
								</Link>
								<Link
									href="#"
									className="hover:text-[#F4C95D] transition-colors"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
							</div>
						</div>
					</div>

					{/* Right Column - Subscribe */}
					<div className="space-y-6">
						<h3 className="font-bold text-xl">
							SUBSCRIBE TO GET LATEST UPDATES AND NEWS
						</h3>
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder="Yourmail@gmail.com"
								className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
							/>
							<Button className="bg-[#F4C95D] text-black hover:bg-[#F4C95D]/90 whitespace-nowrap px-6">
								SUBSCRIBE
							</Button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
					<p>
						© ECWA Church. All Right Reserved 2023 | Created by{" "}
						<Link
							href="https://marnin-a.vercel.app/"
							className="text-yellow-400 hover:text-white transition-colors"
						>
							Marnin Audu
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
