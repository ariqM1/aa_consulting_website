import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
	slug: string;
	title: string;
	category: string;
	image: string;
}

export default function ProjectCard({
	slug,
	title,
	category,
	image,
}: ProjectCardProps) {
	return (
		<Link href={`/projects/${slug}`} className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image
					src={image}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.category}>{category}</p>
			</div>
		</Link>
	);
}
