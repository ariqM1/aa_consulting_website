import Link from "next/link";
import Image from "next/image";
import styles from "../project-detail.module.css";

export default function CodeDocGenAI() {
	return (
		<main className={styles.container}>
			<div className={styles.backLink}>
				<Link href="/projects">← Back to Portfolio</Link>
			</div>

			<article className={styles.project}>
				<div className={styles.header}>
					<h1 className={styles.title}>CodeDocGen AI</h1>
					<p className={styles.category}>AI / Developer Tools</p>
				</div>

				<div className={styles.hero}>
					<Image
						src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
						alt="CodeDocGen AI"
						width={1200}
						height={600}
						className={styles.heroImage}
					/>
				</div>

				<div className={styles.content}>
					<section className={styles.section}>
						<h2>Overview</h2>
						<p>
							An AI-powered code documentation generator that
							leverages AWS Bedrock and LangChain to create
							intelligent, context-aware documentation for any
							code repository.
						</p>
					</section>

					<section className={styles.section}>
						<h2>Key Features</h2>
						<ul>
							<li>
								<strong>AI-Powered Documentation:</strong>{" "}
								Automatically generates comprehensive
								documentation from uploaded code repositories
							</li>
							<li>
								<strong>Interactive Chatbot:</strong> Ask
								contextual questions about any uploaded code
								using advanced RAG pipeline
							</li>
							<li>
								<strong>Serverless Architecture:</strong>{" "}
								Scalable infrastructure using AWS Lambda and
								S3 for reliable performance
							</li>
						</ul>
					</section>

					<section className={styles.section}>
						<h2>Technologies Used</h2>
						<div className={styles.techStack}>
							<span className={styles.tech}>React</span>
							<span className={styles.tech}>NodeJS</span>
							<span className={styles.tech}>AWS Bedrock</span>
							<span className={styles.tech}>LangChain</span>
							<span className={styles.tech}>AWS Lambda</span>
							<span className={styles.tech}>AWS S3</span>
							<span className={styles.tech}>Serverless</span>
						</div>
					</section>

					<section className={styles.section}>
						<h2>Technical Highlights</h2>
						<ul>
							<li>
								Integrated AWS Bedrock for advanced language
								model capabilities
							</li>
							<li>
								Built a Retrieval-Augmented Generation (RAG)
								pipeline for contextual code understanding
							</li>
							<li>
								Implemented serverless architecture for cost
								efficiency and scalability
							</li>
							<li>
								Created an intuitive React frontend for
								seamless user experience
							</li>
						</ul>
					</section>
				</div>
			</article>
		</main>
	);
}
