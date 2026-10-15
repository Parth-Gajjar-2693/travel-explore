# Chamunda Tours & Travels 🌍

**Your Journey, Our Priority**

Chamunda Tours & Travels is a travel website designed to help customers explore destinations, discover tour packages, and submit travel enquiries easily.

The website provides destination information, tour package details, and convenient enquiry options through email and WhatsApp.

## ✨ Features

- 🏠 **Homepage** — Discover destinations and featured tour packages.
- 🌏 **Destinations** — Explore available travel destinations and their details.
- 🧳 **Tour Packages** — Browse tour packages and view package information.
- 👥 **About Us** — Learn about Chamunda Tours & Travels.
- 📩 **Contact & Enquiry Form** — Submit travel requirements through a form.
- 📧 **Email Enquiries** — Send customer enquiries to the tour manager using EmailJS.
- 💬 **WhatsApp Enquiries** — Open WhatsApp with a prefilled message containing the customer's travel details.
- 📱 **Responsive Design** — Designed for desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Form Handling:** React Hook Form
- **Form Validation:** Zod
- **Email Integration:** EmailJS
- **Deployment:** Vercel

## 📁 Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── destinations/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── tours/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── travel/
├── config/
│   └── site.ts
└── data/
    └── travels.ts

public/
└── images/
    └── chamunda-logo.png
