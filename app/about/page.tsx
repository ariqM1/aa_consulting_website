// File: app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import "./about.css";

export default function About() {
	return (
		<main className="about">
			<section className="about__intro">
				<h1 className="about__title">About Us</h1>
				<p className="about__description">
					Welcome to{" "}
					<span className="about__brand">A&A Consulting</span>. We
					provide expert consulting services to help your business
					thrive.
				</p>
			</section>

			<section className="team" aria-label="Our Team">
				{/* Ariq */}
				<article
					className="member"
					itemScope
					itemType="https://schema.org/Person"
				>
					<div className="member__image">
						<Image
							src="/images/ariq.jpg"
							alt="Portrait of Ariq Mukul"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							priority
						
            />
					</div>

					<div className="member__body">
						<header className="member__header">
							<h3 className="member__name" itemProp="name">
								Ariq Mukul
							</h3>
							<ul className="member__tags" aria-label="tags">
								<li>Full‑Stack</li>
								<li>AI</li>
							</ul>
						</header>

						<p className="member__bio" itemProp="description">
							Georgia Tech alum (BS, Computer Science — Highest
							Honors). Full‑stack engineer on an AI team at
							Genesys, where he built an AI application to
							transcribe and analyze customer video calls using
							automatic speech recognition (ASR) and a
							Retrieval‑Augmented Generation (RAG) pipeline.
							Founder of
							<strong> JustHealth</strong>, a healthcare
							transparency startup. Ariq is a fast learner with
							proven experience across React/Node, Python, and
							AWS—ready to adapt quickly to your business needs.
						</p>

						<nav className="member__links" aria-label="Ariq links">
							<Link href="mailto:ariqmukul@gmail.com">
								ariqmukul@gmail.com
							</Link>
						</nav>
					</div>
				</article>

				{/* Allyaan (placeholder) */}
				<article
					className="member"
					itemScope
					itemType="https://schema.org/Person"
				>
					<div className="member__image">
						<Image
							src="/images/allyaan.jpg"
							alt="Portrait of Allyaan"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>

					<div className="member__body">
						<header className="member__header">
							<h3 className="member__name" itemProp="name">
								Allyaan
							</h3>
						</header>

						<p className="member__bio" itemProp="description">
							Short bio coming soon. Add a sentence or two
							highlighting core strengths, domain expertise, and
							the value Allyaan brings to client engagements.
						</p>

						<ul className="member__highlights">
							<li>Key accomplishment or focus area.</li>
							<li>Relevant tools/tech or industry experience.</li>
							<li>Outcome or impact metric.</li>
						</ul>
					</div>
				</article>
			</section>
		</main>
	);
}
