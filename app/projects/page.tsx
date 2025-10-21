import ProjectCard from "@/components/ProjectCard";
import styles from "./projects.module.css";

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

export default function Projects() {
	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Portfolio</h1>
				<p className={styles.description}>
					Explore our portfolio of successful projects and client
					success stories.
				</p>
			</div>
			<div className={styles.grid}>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						slug={project.slug}
						title={project.title}
						category={project.category}
						image={project.image}
					/>
				))}
			</div>
		</main>
	);
}
