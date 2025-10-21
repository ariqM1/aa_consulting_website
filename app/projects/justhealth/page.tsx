import Link from "next/link";
import Image from "next/image";
import styles from "../project-detail.module.css";

export default function JustHealth() {
	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<div className={styles.header}>
					<h1 className={styles.title}>JustHealth</h1>
					<p className={styles.category}>HealthTech / Startup</p>
				</div>

				<div className={styles.hero}>
					<Image
						src="/images/justhealth.png"
						alt="JustHealth"
						width={1200}
						height={600}
						className={styles.heroImage}
					/>
				</div>

				<div className={styles.content}>
					<section className={styles.section}>
						<h2>Overview</h2>
						<p>
							Co-founded JustHealth, a healthcare transparency
							startup that promotes accessible healthcare by
							providing comprehensive procedure cost data,
							facilitating cost comparisons, and delivering
							powerful data analytics.
						</p>
						<p className={styles.timeline}>
							<strong>Duration:</strong> August 2022 - May 2024
						</p>
					</section>

					<section className={styles.section}>
						<h2>Key Achievements</h2>
						<ul>
							<li>
								Established partnerships with{" "}
								<strong>3 hospitals</strong> and healthcare
								systems
							</li>
							<li>
								Aggregated real-time pricing data across
								multiple service lines
							</li>
							<li>
								Negotiated data-sharing agreements with major
								healthcare providers
							</li>
							<li>
								Implemented secure APIs to capture actionable
								cost metrics
							</li>
						</ul>
					</section>

					<section className={styles.section}>
						<h2>Platform Features</h2>
						<ul>
							<li>
								<strong>Price Transparency:</strong>{" "}
								Comprehensive database of healthcare procedure
								costs
							</li>
							<li>
								<strong>Cost Comparison Tools:</strong> Compare
								prices across different providers and
								locations
							</li>
							<li>
								<strong>Data Analytics:</strong> Powerful
								insights into healthcare pricing trends
							</li>
							<li>
								<strong>Real-Time Integration:</strong> Live
								data feeds from partner healthcare systems
							</li>
						</ul>
					</section>

					<section className={styles.section}>
						<h2>Impact</h2>
						<p>
							JustHealth empowered patients to make informed
							healthcare decisions by providing unprecedented
							transparency into healthcare costs. Our platform
							helped users save money while promoting competition
							and fairness in the healthcare industry.
						</p>
					</section>
				</div>
			</article>
		</main>
	);
}
