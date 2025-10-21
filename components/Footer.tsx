import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerTop}>
					<div className={styles.footerBrand}>
						<h2 className={styles.brandName}>A&A Consulting</h2>
					</div>

					<div className={styles.contactInfo}>
						<div className={styles.contactItem}>
							<div className={styles.iconWrapper}>
								<svg
									className={styles.icon}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<p className={styles.contactTitle}>
									+1 (123) 456-7890
								</p>
								<p className={styles.contactSubtext}>
									Available Monday to Friday, 9 AM - 5 PM EST
								</p>
							</div>
						</div>

						<div className={styles.contactItem}>
							<div className={styles.iconWrapper}>
								<svg
									className={styles.icon}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<p className={styles.contactTitle}>
									info@aaconsulting.com
								</p>
								<p className={styles.contactSubtext}>
									For support: support@aaconsulting.com
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footerNav}>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/services">Services</Link>
					<Link href="/projects">Portfolio</Link>
				</div>

				<div className={styles.footerBottom}>
					<p className={styles.copyright}>
						©A&A Consulting. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
