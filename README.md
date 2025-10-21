# A&A Consulting Website

A professional consulting website built with NextJS, featuring a portfolio showcase, contact form, and responsive design.

## Features

-   **Navigation**: Home, About, Services, Portfolio pages with "Get a Quote" button
-   **Portfolio Showcase**: Interactive project cards with detailed case studies
-   **Contact Form**: Quote request form with email integration via Nodemailer
-   **Responsive Design**: Mobile-first design with CSS Modules
-   **Project Carousel**: Home page carousel displaying featured projects

## Tech Stack

-   Next.js 15.5.6
-   React 19.1.0
-   TypeScript
-   Tailwind CSS 4
-   Nodemailer (email functionality)
-   CSS Modules

## Deployment on Replit

### Step 1: Upload Project to Replit

1. Go to [Replit](https://replit.com)
2. Click "Create Repl"
3. Select "Import from GitHub" or upload your project files
4. Choose Node.js as the template

### Step 2: Install Dependencies

Once your project is uploaded, Replit will automatically detect `package.json` and install dependencies. If not, run:

```bash
npm install
```

### Step 3: Set Up Environment Variables

1. In Replit, click on the "Secrets" tab (lock icon in the left sidebar)
2. Add the following environment variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**To get a Gmail App Password:**

1. Go to your Google Account settings
2. Enable 2-factor authentication if not already enabled
3. Go to Security → 2-Step Verification → App Passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password and use it as `EMAIL_PASS`

### Step 4: Run the Development Server

Click the "Run" button in Replit, or manually run:

```bash
npm run dev
```

The application will be available at the URL provided by Replit (typically `https://your-repl-name.your-username.repl.co`)

### Step 5: Deploy to Production

1. Click the "Deploy" button in Replit
2. Choose "Autoscale" or "Reserved VM" deployment option
3. Configure deployment settings as needed
4. Click "Deploy"

For production deployment, Replit will run:

```bash
npm run build
npm run start
```

## Local Development

If you want to run this project locally:

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env.local` file with your email credentials:
    ```
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-gmail-app-password
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
aa-consulting-website/
├── app/
│   ├── about/          # About page
│   ├── api/quote/      # API route for contact form
│   ├── projects/       # Portfolio pages
│   ├── quote/          # Quote request page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with navbar & footer
│   └── page.tsx        # Home page with carousel
├── components/
│   ├── Footer.tsx      # Site footer
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProjectCard.tsx # Reusable project card
│   └── ProjectCarousel.tsx # Home page carousel
├── public/
│   └── images/         # Project images
└── package.json
```

## Portfolio Projects

The website showcases three main projects:

1. **FinanceTrack**: Full-stack financial tracking platform with Plaid API integration
2. **CodeDocGen AI**: AI-powered code documentation tool using AWS Bedrock and LangChain
3. **JustHealth**: HealthTech startup with HIPAA-compliant appointment management

## Contact

For quote requests, use the "Get a Quote" button in the navigation bar.

## License

Private project for A&A Consulting.
