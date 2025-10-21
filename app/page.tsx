import ProjectCarousel from "@/components/ProjectCarousel";
import styles from "./page.module.css";

const projects = [
	{
		slug: "financetrack",
		title: "FinanceTrack",
		category: "Full-Stack / FinTech",
		image: "/images/financetrack.png",
	},
	{
		slug: "codedocgen-ai",
		title: "CodeDocGen AI",
		category: "AI / Developer Tools",
		image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
	},
	{
		slug: "justhealth",
		title: "JustHealth",
		category: "HealthTech / Startup",
		image: "/images/justhealth.png",
	},
];

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.projectsSection}>
				<div className={styles.sectionHeader}>
					<p className={styles.sectionLabel}>Portfolio</p>
					<h2 className={styles.sectionTitle}>Our recent projects</h2>
					<p className={styles.sectionDescription}>
						We take pride in our diverse portfolio of successful
						projects across various industries.
					</p>
				</div>
				<ProjectCarousel projects={projects} />
			</section>
		</main>
	);
}
