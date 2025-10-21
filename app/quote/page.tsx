"use client";

import { useState } from "react";
import styles from "./quote.module.css";

export default function Quote() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		interest: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/quote", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus({
					type: "success",
					message: "Thank you! We'll get back to you soon.",
				});
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					interest: "",
					message: "",
				});
			} else {
				setSubmitStatus({
					type: "error",
					message: "Something went wrong. Please try again.",
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message: "Failed to send message. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className={styles.quote}>
			<section className={styles.hero}>
				<h1 className={styles.heroTitle}>Contact us</h1>
			</section>

			<section className={styles.formSection}>
				<div className={styles.formContainer}>
					<div className={styles.formLeft}>
						<p className={styles.subtitle}>Ready to Collaborate?</p>
						<h2 className={styles.title}>
							Start Your
							<br />
							Journey with Us
						</h2>
					</div>

					<div className={styles.formRight}>
						<form onSubmit={handleSubmit} className={styles.form}>
							<div className={styles.formRow}>
								<div className={styles.formGroup}>
									<input
										type="text"
										name="firstName"
										placeholder="First name"
										value={formData.firstName}
										onChange={handleChange}
										required
										className={styles.input}
									/>
								</div>
								<div className={styles.formGroup}>
									<input
										type="text"
										name="lastName"
										placeholder="Last name"
										value={formData.lastName}
										onChange={handleChange}
										required
										className={styles.input}
									/>
								</div>
							</div>

							<div className={styles.formRow}>
								<div className={styles.formGroup}>
									<input
										type="email"
										name="email"
										placeholder="Email"
										value={formData.email}
										onChange={handleChange}
										required
										className={styles.input}
									/>
								</div>
								<div className={styles.formGroup}>
									<input
										type="tel"
										name="phone"
										placeholder="Phone number"
										value={formData.phone}
										onChange={handleChange}
										className={styles.input}
									/>
								</div>
							</div>

							<div className={styles.formGroup}>
								<select
									name="interest"
									value={formData.interest}
									onChange={handleChange}
									required
									className={styles.select}
								>
									<option value="">Interested in...</option>
									<option value="consulting">
										General Consulting
									</option>
									<option value="development">
										Software Development
									</option>
									<option value="ai">AI Solutions</option>
									<option value="other">Other</option>
								</select>
							</div>

							<div className={styles.formGroup}>
								<textarea
									name="message"
									placeholder="Message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className={styles.textarea}
								/>
							</div>

							{submitStatus.type && (
								<div
									className={
										submitStatus.type === "success"
											? styles.successMessage
											: styles.errorMessage
									}
								>
									{submitStatus.message}
								</div>
							)}

							<button
								type="submit"
								disabled={isSubmitting}
								className={styles.submitButton}
							>
								{isSubmitting
									? "Sending..."
									: "Let's Get Started"}
							</button>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}
