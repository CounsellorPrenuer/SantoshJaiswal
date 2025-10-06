# Mentoria - Maargadarshan

**From Confusion to Clarity. From Goals to Growth.**

## Overview

A modern, professionally designed career mentorship and guidance website for Mentoria - Maargadarshan. The website showcases expert career guidance services for students, working professionals, and corporates across Education, IT, FMCG, and Services sectors.

**Founder:** Santosh S Jaiswal - Career Guidance Expert with 20+ years experience

## Project Details

- **Type:** Single-page React application (SPA)
- **Tech Stack:** React, TypeScript, Tailwind CSS, GSAP, AOS, Vite
- **Status:** Production-ready ✅
- **Last Updated:** October 6, 2025

## Features Implemented

### 🎨 Design System
- Custom color palette:
  - Background: Light gray (#F8F9FA)
  - Text: Charcoal (#212529)
  - Primary Accent: Blue (#0D6EFD)
  - Action Accent: Orange (#FD7E14)
- Responsive design for mobile, tablet, and desktop
- Modern, professional aesthetic inspired by Apple, Stripe, and Leadcrest

### 🎬 Animations & Interactions
- **GSAP ScrollTrigger:** Staggered card reveals on scroll
- **AOS (Animate On Scroll):** Fade and slide animations for sections
- **CountUp.js:** Animated stat counters (2500+, 20+, 92%, 50+)
- **Embla Carousel:** Auto-playing testimonial slider
- **Particle Background:** Interactive animated background in hero
- **Ripple Effects:** Click animations on all CTA buttons
- **Hover Effects:** 5% scale increase on cards
- **Floating Gradients:** Animated background elements

### 📱 Sections

1. **Navigation**
   - Fixed header with smooth scrolling
   - Mobile-responsive hamburger menu
   - Logo and branding

2. **Hero Section**
   - Animated particle background
   - Floating gradient orbs
   - Primary and secondary CTAs
   - Tagline and value proposition

3. **Stats Dashboard**
   - 2500+ Professionals Guided
   - 20+ Years Experience
   - 92% Success Rate
   - 50+ Workshops Conducted

4. **Why Choose Us**
   - Expert Guidance
   - Future-ready Skills
   - Tailored Career Mentorship
   - Trusted by 2500+ Professionals

5. **Services**
   - For Students: Strategic academic & career foundation
   - For Working Professionals: Career growth and upskilling
   - For Corporates: Employee wellbeing and workshops

6. **How It Works**
   - 4-step process visualization
   - Icons and descriptions

7. **Testimonials**
   - Carousel with 3 real client stories
   - SP: Engineering Student → IT Analyst
   - RK: MBA Aspirant → Marketing Associate
   - AM: Working Professional → Team Lead

8. **Pricing Packages**
   - Student Package: ₹5,999*
   - Professional Package: ₹9,999* (Most Popular)
   - Corporate Package: ₹15,999*

9. **Founder Profile**
   - Photo and biography
   - Certifications and expertise
   - Call-to-action

10. **Contact Section**
    - Phone: +91 7977410005
    - Email: santosh.jw@gmail.com
    - Location: Mumbai, India
    - Office Hours: Mon-Fri, 9:00 AM – 6:00 PM
    - Social media links (LinkedIn, Instagram)

11. **Footer**
    - Quick links
    - Social media
    - Copyright information

## Technical Architecture

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** Shadcn UI component library
- **Animations:**
  - GSAP with ScrollTrigger plugin
  - AOS (Animate On Scroll)
  - React CountUp
  - Embla Carousel with Autoplay

### Backend
- **Server:** Express.js
- **Build Tool:** Vite with HMR
- **Port:** 5000 (unified frontend and backend)

## Running the Project

The project is configured to run automatically via the "Start application" workflow:

```bash
npm run dev
```

This starts both the Express backend and Vite development server on port 5000.

## Assets

- **Logo:** `attached_assets/logo - santosh jaiswal_1759735777096.jpeg`
- **Founder Photo:** `attached_assets/Santosh - santosh jaiswal_1759735777095.jfif`

## Testing

✅ All end-to-end tests passed successfully:
- Navigation and smooth scrolling
- Hero section CTAs
- Animated stat counters
- Service cards and interactions
- Pricing packages
- Testimonials carousel
- Founder section
- Contact information
- Footer links
- Mobile responsive navigation

## Deployment

The website is production-ready and can be published using Replit's deployment feature.

## Contact

For questions about the website implementation, refer to the code in:
- `client/src/pages/Home.tsx` - Main page component
- `client/src/components/` - All section components
- `client/src/index.css` - Custom styles and animations
- `tailwind.config.ts` - Design tokens

## Copyright

© 2025 Mentoria – Maargadarshan. All rights reserved.
