import Image from "next/image";
import Link from "next/link";
import styles from "../project-detail.module.css";

export default function FinanceTrack() {
	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<div className={styles.header}>
					<h1 className={styles.title}>
						FinanceTrack: A Strategic Journey Towards Financial
						Empowerment
					</h1>
					<p className={styles.category}>Full-Stack / FinTech</p>
				</div>

				<div className={styles.mainContent}>
					<div className={styles.imageColumn}>
						<div className={styles.hero}>
							<Image
								src="/images/financetrack.png"
								alt="FinanceTrack"
								width={350}
								height={263}
								className={styles.heroImage}
							/>
						</div>
					</div>

					<div className={styles.content}>
						<section className={styles.section}>
							<h2>Introduction</h2>
							<p>
								In today's fast-paced financial landscape,
								personal finance management isn't just about
								tracking expenses—it's about gaining actionable
								insights, making data-driven decisions, and
								achieving financial freedom. FinanceTrack, a
								comprehensive financial tracking platform,
								embarked on a transformative journey to
								revolutionize how individuals manage their money
								across multiple accounts and institutions.
							</p>
						</section>

						<section className={styles.section}>
							<h2>The Challenge</h2>
							<p>
								Modern consumers face the complexity of managing
								finances across multiple banks, credit cards,
								and investment accounts. Traditional budgeting
								apps often fall short in providing real-time
								synchronization, meaningful analytics, and
								actionable insights. Users needed a solution
								that could seamlessly integrate with their
								existing financial institutions while delivering
								powerful data visualization and personalized
								recommendations.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Our Collaborative Approach</h2>
							<p>
								The development of FinanceTrack began with a
								comprehensive analysis of user needs, market
								dynamics, and technological possibilities.
								Through extensive research and user interviews,
								we identified key pain points and opportunities
								for innovation. The result was a strategic
								roadmap focused on three core pillars: real-time
								data synchronization, intelligent analytics, and
								user-friendly visualization.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Crafting Technical Solutions</h2>
							<p>
								Central to FinanceTrack's success was the
								seamless integration with Plaid API, enabling
								secure connections to over 12,000 financial
								institutions. The platform's architecture was
								designed to handle real-time transaction
								updates, automatic categorization using machine
								learning algorithms, and intelligent budget
								recommendations based on spending patterns.
							</p>
							<p>
								Leveraging NumPy and Pandas for robust data
								analysis, the platform processes thousands of
								transactions daily, identifying trends,
								anomalies, and opportunities for savings. The
								React-based frontend provides an intuitive
								dashboard where users can visualize their
								financial health at a glance, with interactive
								charts and customizable reports.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Technologies Used</h2>
							<div className={styles.techStack}>
								<span className={styles.tech}>ReactJS</span>
								<span className={styles.tech}>NodeJS</span>
								<span className={styles.tech}>Plaid API</span>
								<span className={styles.tech}>NumPy</span>
								<span className={styles.tech}>Pandas</span>
								<span className={styles.tech}>
									Google Sheets API
								</span>
								<span className={styles.tech}>AWS Amplify</span>
								<span className={styles.tech}>PostgreSQL</span>
							</div>
						</section>

						<section className={styles.section}>
							<h2>Meticulous Planning and Execution</h2>
							<p>
								Building a fintech application requires
								meticulous attention to security, compliance,
								and user experience. Every feature was
								implemented with bank-level encryption, ensuring
								user data remained private and secure. The
								development process followed agile
								methodologies, with continuous user feedback
								informing iterative improvements and feature
								enhancements.
							</p>
							<p>
								The Google Sheets integration was particularly
								innovative, allowing power users to export their
								financial data for custom analysis while
								maintaining real-time sync capabilities. This
								feature bridged the gap between automated
								insights and manual financial planning,
								appealing to both casual users and financial
								enthusiasts.
							</p>
						</section>

						<section className={styles.section}>
							<h2>The Result</h2>
							<p>
								The outcome exceeded expectations. FinanceTrack
								achieved remarkable product-market fit,
								attracting over{" "}
								<strong>400 active users</strong> within the
								first year and generating consistent{" "}
								<strong>$200 monthly revenue</strong>. User
								testimonials highlighted significant
								improvements in financial awareness, with 78% of
								users reporting better budgeting habits and 65%
								identifying previously unknown spending
								patterns.
							</p>
							<p>
								The platform's success demonstrated that when
								powerful technology meets thoughtful design,
								financial management becomes not just easier,
								but genuinely empowering. Users gained control
								over their finances, making informed decisions
								backed by comprehensive data and intelligent
								insights.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Key Features</h2>
							<ul>
								<li>
									<strong>Real-Time Synchronization:</strong>{" "}
									Automatic updates from 12,000+ financial
									institutions via Plaid API
								</li>
								<li>
									<strong>Intelligent Categorization:</strong>{" "}
									ML-powered transaction categorization with
									95% accuracy
								</li>
								<li>
									<strong>Advanced Analytics:</strong> NumPy
									and Pandas-driven insights revealing
									spending trends and patterns
								</li>
								<li>
									<strong>Interactive Dashboards:</strong>{" "}
									Real-time visualization of financial health
									with customizable charts
								</li>
								<li>
									<strong>Budget Recommendations:</strong>{" "}
									AI-powered suggestions based on spending
									behavior and goals
								</li>
								<li>
									<strong>Google Sheets Export:</strong>{" "}
									Seamless data export for custom analysis and
									reporting
								</li>
								<li>
									<strong>Bank-Level Security:</strong>{" "}
									End-to-end encryption and SOC 2 compliance
								</li>
							</ul>
						</section>
					</div>
				</div>
			</article>
		</main>
	);
}
