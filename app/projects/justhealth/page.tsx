import Image from "next/image";
import Link from "next/link";
import styles from "../project-detail.module.css";

export default function JustHealth() {
	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<div className={styles.header}>
					<h1 className={styles.title}>
						JustHealth: A Strategic Mission Towards Healthcare
						Transparency
					</h1>
					<p className={styles.category}>HealthTech / Startup</p>
					<p className={styles.timeline}>
						<strong>Duration:</strong> August 2022 - May 2024
					</p>
				</div>

				<div className={styles.mainContent}>
					<div className={styles.imageColumn}>
						<div className={styles.hero}>
							<Image
								src="/images/justhealth.png"
								alt="JustHealth"
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
								Healthcare costs in America remain one of the
								most pressing challenges facing patients and
								families. The lack of price transparency often
								leaves individuals blindsided by unexpected
								medical bills, unable to make informed decisions
								about their care. JustHealth was co-founded with
								a clear mission: to democratize healthcare
								pricing information and empower patients to make
								cost-conscious healthcare decisions without
								compromising quality.
							</p>
						</section>

						<section className={styles.section}>
							<h2>The Challenge</h2>
							<p>
								The healthcare industry has long operated with
								opaque pricing structures, where the cost of the
								same procedure can vary dramatically between
								providers, yet this information remains largely
								inaccessible to patients. Traditional healthcare
								systems provided little to no visibility into
								procedure costs until after care was delivered,
								leaving patients with limited ability to
								comparison shop or budget for medical expenses.
							</p>
							<p>
								The challenge was twofold: first, aggregating
								real-time pricing data from healthcare systems
								that traditionally kept this information
								proprietary; second, presenting this complex
								data in a user-friendly format that empowers
								patients to make informed decisions without
								overwhelming them with medical jargon.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Our Collaborative Approach</h2>
							<p>
								Building JustHealth required navigating the
								complex landscape of healthcare data, regulatory
								x compliance, and partnership negotiations. The
								approach centered on establishing trust with
								healthcare providers while demonstrating the
								mutual benefits of price transparency. Through
								extensive stakeholder engagement, we positioned
								JustHealth not as a threat to healthcare
								systems, but as a partner in promoting quality
								care and patient satisfaction.
							</p>
							<p>
								The strategy involved targeting forward-thinking
								healthcare systems that recognized the value of
								transparency in building patient trust and
								competitive differentiation. By showcasing early
								success metrics and patient testimonials, we
								were able to establish partnerships with three
								major hospital networks, creating a foundation
								for broader market expansion.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Crafting Technical Solutions</h2>
							<p>
								The technical architecture of JustHealth was
								designed to handle complex, real-time data
								integration from multiple healthcare systems,
								each with its own data formats, update
								schedules, and security requirements. We
								implemented secure APIs that connected directly
								to partner hospital systems, extracting pricing
								data for thousands of procedures across multiple
								service lines.
							</p>
							<p>
								Data normalization was a critical challenge, as
								different healthcare systems categorize and
								price procedures differently. We developed
								sophisticated algorithms to standardize this
								information, ensuring patients could make
								accurate comparisons across providers. The
								platform included powerful analytics tools that
								revealed pricing trends, geographic variations,
								and quality metrics, providing patients with
								comprehensive insights beyond just cost.
							</p>
							<p>
								The user interface was designed with
								accessibility in mind, recognizing that
								healthcare decisions are often made during
								stressful times. Simple search functionality,
								clear visualizations, and plain-language
								explanations made complex healthcare pricing
								data understandable for all users, regardless of
								their technical or medical background.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Key Technologies</h2>
							<div className={styles.techStack}>
								<span className={styles.tech}>React</span>
								<span className={styles.tech}>Node.js</span>
								<span className={styles.tech}>PostgreSQL</span>
								<span className={styles.tech}>
									RESTful APIs
								</span>
								<span className={styles.tech}>AWS</span>
								<span className={styles.tech}>
									Data Analytics
								</span>
								<span className={styles.tech}>
									HIPAA Compliance
								</span>
								<span className={styles.tech}>Chart.js</span>
							</div>
						</section>

						<section className={styles.section}>
							<h2>Partnership Development</h2>
							<p>
								Establishing partnerships with three hospitals
								and healthcare systems represented a significant
								achievement in an industry known for guarding
								pricing information. These partnerships were
								built on a foundation of trust, demonstrating
								how transparency could enhance patient
								satisfaction, improve competitive positioning,
								and ultimately drive better healthcare outcomes.
							</p>
							<p>
								Each partnership required careful negotiation of
								data-sharing agreements, ensuring compliance
								with HIPAA regulations and protecting sensitive
								information. We implemented robust security
								measures and audit trails, providing healthcare
								partners with confidence that their data would
								be handled with the utmost care and
								professionalism.
							</p>
							<p>
								The success of these initial partnerships laid
								the groundwork for expansion, with additional
								healthcare systems expressing interest in
								joining the platform. The network effect became
								evident: as more providers joined, the platform
								became more valuable to patients, which in turn
								attracted more healthcare partners.
							</p>
						</section>

						<section className={styles.section}>
							<h2>The Impact</h2>
							<p>
								JustHealth successfully demonstrated that
								healthcare transparency is not only possible but
								beneficial for all stakeholders. Patients gained
								unprecedented visibility into healthcare costs,
								enabling them to make informed decisions and
								potentially save thousands of dollars on medical
								procedures. Healthcare providers that
								participated saw improvements in patient
								satisfaction and loyalty, while those offering
								competitive pricing gained a platform to
								showcase their value proposition.
							</p>
							<p>
								The platform revealed significant pricing
								variations for common procedures, with some
								surgeries varying by over 300% between providers
								in the same geographic area. This data empowered
								patients to ask important questions and advocate
								for fair pricing, contributing to a broader
								conversation about healthcare costs and value in
								America.
							</p>
							<p>
								Beyond individual patient benefits, JustHealth
								contributed to the larger movement toward
								healthcare transparency, demonstrating that
								technology can serve as a bridge between complex
								healthcare systems and the patients they serve.
								The platform showed that when armed with
								information, patients become better healthcare
								consumers, ultimately driving competition and
								efficiency in the healthcare marketplace.
							</p>
						</section>

						<section className={styles.section}>
							<h2>Platform Features</h2>
							<ul>
								<li>
									<strong>
										Comprehensive Price Database:
									</strong>{" "}
									Real-time pricing for thousands of
									procedures across multiple healthcare
									systems
								</li>
								<li>
									<strong>Advanced Comparison Tools:</strong>{" "}
									Side-by-side comparisons of costs, quality
									metrics, and patient reviews
								</li>
								<li>
									<strong>Geographic Price Mapping:</strong>{" "}
									Visual representation of pricing variations
									across different providers and locations
								</li>
								<li>
									<strong>Quality Indicators:</strong>{" "}
									Integration of patient outcomes and
									satisfaction scores alongside pricing data
								</li>
								<li>
									<strong>Personalized Estimates:</strong>{" "}
									Cost calculators accounting for insurance
									coverage and out-of-pocket expenses
								</li>
								<li>
									<strong>Trend Analytics:</strong> Historical
									pricing trends and predictions for informed
									planning
								</li>
								<li>
									<strong>Secure Data Handling:</strong>{" "}
									HIPAA-compliant infrastructure protecting
									patient privacy
								</li>
								<li>
									<strong>Mobile Accessibility:</strong>{" "}
									Responsive design enabling price research on
									any device
								</li>
							</ul>
						</section>

						<section className={styles.section}>
							<h2>Key Achievements</h2>
							<ul>
								<li>
									Successfully established partnerships with{" "}
									<strong>3 major hospital systems</strong>,
									creating a foundation for market expansion
								</li>
								<li>
									Aggregated real-time pricing data across
									multiple service lines, including surgery,
									imaging, and outpatient procedures
								</li>
								<li>
									Negotiated complex data-sharing agreements
									while maintaining HIPAA compliance and
									protecting sensitive information
								</li>
								<li>
									Implemented secure APIs capturing actionable
									cost metrics and quality indicators
								</li>
								<li>
									Demonstrated measurable impact on patient
									decision-making and cost savings
								</li>
								<li>
									Built a scalable platform architecture ready
									for nationwide expansion
								</li>
							</ul>
						</section>
					</div>
				</div>
			</article>
		</main>
	);
}
