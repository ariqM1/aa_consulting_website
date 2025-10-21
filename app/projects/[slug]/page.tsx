import Link from "next/link";
import styles from "./project.module.css";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;

	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<h1 className={styles.title}>
					Project: {slug.replace(/-/g, " ")}
				</h1>
				<p className={styles.subtitle}>
					This is a placeholder page for the project.
				</p>

				<div className={styles.content}>
					<p>
						You can customize this page later with detailed
						information about the project including:
					</p>
					<ul>
						<li>Project overview and goals</li>
						<li>Technologies used</li>
						<li>Images and screenshots</li>
						<li>Challenges and solutions</li>
						<li>Results and impact</li>
					</ul>
				</div>
			</article>
		</main>
	);
}
