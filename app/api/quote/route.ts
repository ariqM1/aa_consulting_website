import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { firstName, lastName, email, phone, interest, message } = body;

		// Create a transporter using Gmail
		// Note: You'll need to set up environment variables for this to work
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Email content
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "ariqmukul@gmail.com",
			subject: `New Quote Request from ${firstName} ${lastName}`,
			html: `
				<h2>New Quote Request</h2>
				<p><strong>Name:</strong> ${firstName} ${lastName}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
				<p><strong>Interested in:</strong> ${interest}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
