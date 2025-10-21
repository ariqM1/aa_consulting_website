import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarContent}>
					<div className={styles.navbarLogo}>
						<Link href="/">A&A Consulting</Link>
					</div>
					<div className={styles.navbarRight}>
						<div className={styles.navbarLinks}>
							<Link href="/about">About</Link>
							<Link href="/services">Services</Link>
							<Link href="/projects">Portfolio</Link>
						</div>
						<Link href="/quote" className={styles.quoteButton}>
							Get a Quote
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
