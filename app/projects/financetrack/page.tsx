import Link from "next/link";
import Image from "next/image";
import styles from "../project-detail.module.css";

export default function FinanceTrack() {
	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<div className={styles.header}>
					<h1 className={styles.title}>FinanceTrack</h1>
					<p className={styles.category}>Full-Stack / FinTech</p>
				</div>

				<div className={styles.hero}>
					<Image
						src="/images/financetrack.png"
						alt="FinanceTrack"
						width={1200}
						height={600}
						className={styles.heroImage}
					/>
				</div>

				<div className={styles.content}>
					<section className={styles.section}>
						<h2>Overview</h2>
						<p>
							A full-stack financial tracking application that
							integrates with Plaid API to monitor user
							spending and income from different financial
							accounts seamlessly.
						</p>
					</section>

					<section className={styles.section}>
						<h2>Key Achievements</h2>
						<ul>
							<li>
								Achieved remarkable traction with{" "}
								<strong>400+ active users</strong>
							</li>
							<li>
								Generated{" "}
								<strong>$200 monthly revenue</strong> on
								average
							</li>
							<li>
								Seamless integration with multiple financial
								institutions via Plaid API
							</li>
						</ul>
					</section>

					<section className={styles.section}>
						<h2>Technologies Used</h2>
						<div className={styles.techStack}>
							<span className={styles.tech}>ReactJS</span>
							<span className={styles.tech}>NodeJS</span>
							<span className={styles.tech}>Plaid API</span>
							<span className={styles.tech}>NumPy</span>
							<span className={styles.tech}>Pandas</span>
							<span className={styles.tech}>Google Sheets</span>
							<span className={styles.tech}>AWS Amplify</span>
						</div>
					</section>

					<section className={styles.section}>
						<h2>Features</h2>
						<ul>
							<li>
								Real-time financial account monitoring and
								transaction tracking
							</li>
							<li>
								Robust data analysis and visualization using
								NumPy and Pandas
							</li>
							<li>
								Automated spending categorization and budget
								insights
							</li>
							<li>
								Google Sheets integration for custom reporting
							</li>
							<li>
								Secure authentication and data encryption
							</li>
						</ul>
					</section>
				</div>
			</article>
		</main>
	);
}
