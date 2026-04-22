# Abhishek Rathore — AI Engineer Portfolio

A modern, production-ready personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark theme** with custom color system
- **Framer Motion** animations (section reveals, hover effects, staggered entrances)
- **Scroll progress indicator** — gradient bar pinned to top
- **Glassmorphism navbar** — blurs in on scroll with active section detection
- **Responsive** — mobile-first, fully optimized for all screen sizes
- **Custom scrollbar**, noise texture, grid overlay background
- **Contact form** with client-side validation and success state
- **SEO-ready** — OpenGraph metadata, semantic HTML
- **Optimized fonts** — Syne (display) + DM Sans (body) + JetBrains Mono (code)

## 🧱 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | Typography |

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, font imports, utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page — assembles all sections
│   └── not-found.tsx        # Custom 404 page
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll detection & mobile menu
│   ├── ScrollProgress.tsx   # Top progress bar
│   ├── Hero.tsx             # Hero section with animations
│   ├── SectionHeader.tsx    # Reusable section title component
│   ├── About.tsx            # About me + trait cards
│   ├── Skills.tsx           # Grouped skill cards
│   ├── Projects.tsx         # Project cards with hover effects
│   ├── Experience.tsx       # Timeline experience section
│   ├── Contact.tsx          # Contact links + validated form
│   └── Footer.tsx           # Footer with links and socials
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

### Option 2 — GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds

### Option 3 — Vercel Dashboard

1. Zip your project folder
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the zip file
4. Click **Deploy**

## ✏️ Customization

### Personal Data
Update the following files with your real information:

| File | What to update |
|---|---|
| `components/Hero.tsx` | Name, title, bio, social links |
| `components/About.tsx` | Bio paragraphs, skill tags |
| `components/Skills.tsx` | Skill groups and items |
| `components/Projects.tsx` | Project cards, links, descriptions |
| `components/Experience.tsx` | Job history |
| `components/Contact.tsx` | Email, LinkedIn, GitHub URLs |
| `components/Footer.tsx` | Social links |
| `app/layout.tsx` | SEO title, description, keywords |

### Colors
Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  accent: "#4F8EF7",    // Primary blue — change this
  "accent-2": "#7B5EA7", // Purple — change this
  bg: "#080B12",         // Background
  // ...
}
```

### Fonts
Change fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT...');
```

And update the CSS variables:
```css
:root {
  --font-display: 'Your Display Font', sans-serif;
  --font-geist-sans: 'Your Body Font', sans-serif;
  --font-geist-mono: 'Your Mono Font', monospace;
}
```

## 📧 Connecting the Contact Form

The contact form is currently a mock (no backend). To make it functional:

### Option A — Formspree (easiest, free)

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint
3. In `Contact.tsx`, replace the mock submit with:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");
  
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  
  setStatus(res.ok ? "sent" : "idle");
};
```

### Option B — Resend (developer-friendly)

1. Install: `npm install resend`
2. Create `app/api/contact/route.ts`:

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  await resend.emails.send({
    from: "portfolio@yourdomain.com",
    to: "your@email.com",
    subject: `New message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  });
  
  return Response.json({ ok: true });
}
```

3. Update form submit to call `/api/contact`

### Option C — EmailJS (no backend needed)

1. Install: `npm install @emailjs/browser`
2. Follow [EmailJS docs](https://www.emailjs.com/docs/) to set up template
3. Call `emailjs.send()` in your form handler

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, hidden desktop nav |
| Tablet | 640–900px | 2-column grids |
| Desktop | 900–1100px | Full layout |
| Wide | > 1100px | Floating stats visible |

## 🎯 Performance Tips

- Images: Use `next/image` for any photos you add
- Fonts: Already preloaded via Google Fonts `display=swap`
- Animations: Framer Motion only animates what's in viewport (`whileInView`)
- Bundle: No heavy dependencies — total JS is minimal

## 📄 License

MIT — free to use and modify for personal and commercial projects.

---

Built by [Abhishek Rathore](https://github.com/abhishekrathore)
