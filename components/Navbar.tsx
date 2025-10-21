"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.navbarContent}>
					<div className={styles.navbarLogo}>
						<Link href="/" onClick={closeMenu}>
							A&A Consulting
						</Link>
					</div>

					{/* Desktop Navigation */}
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

					{/* Mobile Burger Menu Button */}
					<button
						className={styles.burgerButton}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				{isMenuOpen && (
					<div className={styles.mobileMenu}>
						<div className={styles.mobileMenuLinks}>
							<Link href="/about" onClick={closeMenu}>
								About
							</Link>
							<Link href="/services" onClick={closeMenu}>
								Services
							</Link>
							<Link href="/projects" onClick={closeMenu}>
								Portfolio
							</Link>
							<Link
								href="/quote"
								className={styles.mobileQuoteButton}
								onClick={closeMenu}
							>
								Get a Quote
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
