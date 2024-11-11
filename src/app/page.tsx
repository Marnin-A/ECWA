import Events from "@/components/home/events/Events";
import Hero from "@/components/home/hero/Hero";
import SundayRecap from "@/components/home/sunday-recap/SundayRecap";

export default function Home() {
	return (
		<main>
			<Hero />
			<SundayRecap />
			<Events />
		</main>
	);
}
