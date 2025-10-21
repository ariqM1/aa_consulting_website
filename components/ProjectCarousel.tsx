"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectCarousel.module.css";

interface Project {
	slug: string;
	title: string;
	category: string;
	image: string;
}

interface ProjectCarouselProps {
	projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Show 3 projects at a time
	const projectsPerView = 3;
	const maxIndex = Math.max(0, projects.length - projectsPerView);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(0, prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
	};

	const visibleProjects = projects.slice(
		currentIndex,
		currentIndex + projectsPerView
	);

	return (
		<div className={styles.carousel}>
			<div className={styles.controls}>
				<button
					onClick={handlePrev}
					disabled={currentIndex === 0}
					className={styles.controlButton}
					aria-label="Previous projects"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>
				<button
					onClick={handleNext}
					disabled={currentIndex >= maxIndex}
					className={styles.controlButton}
					aria-label="Next projects"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M9 18l6-6-6-6" />
					</svg>
				</button>
			</div>

			<div className={styles.projectsContainer}>
				{visibleProjects.map((project) => (
					<div key={project.slug} className={styles.projectWrapper}>
						<ProjectCard
							slug={project.slug}
							title={project.title}
							category={project.category}
							image={project.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
