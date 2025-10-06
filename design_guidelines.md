# Mentoria – Maargadarshan Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from Leadcrest Consulting, Apple, Stripe, and Mentoria for modern, professional career mentorship aesthetics.

## Color System

### Backgrounds
- **Primary Background**: Light gray (#F8F9FA) - covers most of the screen
- **Card/Section Backgrounds**: White (#FFFFFF) with subtle shadows

### Typography Colors
- **Body Text**: Charcoal (#212529) - all paragraphs and general text
- **Headings**: Charcoal (#212529) or Blue accent for hierarchy

### Accent Colors
- **Primary Accent (Blue)**: #0D6EFD
  - Use for: Headlines, links, icons, secondary buttons
  - Purpose: Elements that need distinction but aren't primary actions
  
- **Action Accent (Reddish-Orange)**: #FD7E14
  - Use SPARINGLY for: "Book A Free Call", "Discover Your Path", "Sign Up" buttons
  - Purpose: The single most important action on each section

## Typography

### Font Stack
- **Primary**: Inter or similar modern sans-serif from Google Fonts
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Scale
- **Hero Headline**: text-5xl to text-6xl, font-bold
- **Section Headers**: text-3xl to text-4xl, font-bold
- **Subheadings**: text-xl to text-2xl, font-semibold
- **Body Text**: text-base to text-lg, font-normal
- **Small Text**: text-sm for captions and metadata

## Layout System

### Spacing
- **Section Padding**: py-16 to py-24 (desktop), py-12 (mobile)
- **Container Max-Width**: max-w-7xl
- **Content Max-Width**: max-w-6xl
- **Card Spacing**: gap-6 to gap-8
- **Common Units**: Use Tailwind units of 4, 6, 8, 12, 16, 24

### Grid Systems
- **Feature Cards**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Services**: grid-cols-1 md:grid-cols-3
- **Packages**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Testimonials**: Horizontal slider/carousel

## Component Library

### Navigation
- Sticky header with light background (#F8F9FA)
- Logo on left, navigation links center/right
- "Book A Free Call" CTA button in orange (#FD7E14)
- Mobile: Hamburger menu

### Hero Section
- **Animated Background**: Gradient waves, moving particles, or subtle Three.js canvas animation
- **Content**: Left-aligned or centered
  - Main headline: "Future-proof your career with expert guidance"
  - Subheading: "Redefining Career Trajectory with Confidence"
  - Target audience text
  - Two CTAs: "Book A Free Call" (orange), "Discover Your Path" (blue outline)
- **Height**: 80-90vh with proper padding
- **Background**: Animated gradient or particle system using GSAP/Three.js

### Stats Section
- **Layout**: 4-column grid (responsive to 2-col on tablet, 1-col mobile)
- **Animated Counters**: Numbers count up on scroll using GSAP
- **Stats**: 2500+ Professionals, 20+ Years, 92% Success, 50+ Workshops
- **Style**: Large bold numbers, smaller descriptive text below

### Cards (Services, Features, Packages)
- **Base Style**: White background, rounded-lg, shadow-md
- **Hover Effect**: Scale 105%, shadow-xl transition
- **Content**: Icon/image top, title, description, CTA button
- **Spacing**: p-6 to p-8

### Package Cards
- **Pricing Display**: Large number, strike-through if discounted
- **Features List**: Checkmark icons with blue (#0D6EFD)
- **CTA Button**: Orange (#FD7E14) for "Book Now"
- **Highlight**: Featured package with border or subtle background

### Testimonials
- **Format**: Carousel/slider with navigation dots
- **Card Style**: White background, rounded, with quote marks
- **Content**: Quote text, name, designation, transformation arrow
- **Animation**: Smooth slide transitions

### Buttons
- **Primary CTA**: bg-orange (#FD7E14), white text, rounded, shadow-md
  - Hover: Slight gradient shift, shadow-lg, scale 102%
  - Click: Ripple effect
- **Secondary**: Blue (#0D6EFD) outline, blue text
  - Hover: Fill with blue, white text
- **Size**: px-6 py-3 (medium), px-8 py-4 (large)

## Animations & Interactions

### Scroll Animations (AOS)
- **Fade In**: Sections appear with fade-up
- **Slide**: Cards slide in from left/right
- **Duration**: 800-1000ms
- **Offset**: Trigger when 20% in viewport

### Hover Effects
- **Cards**: transform scale(1.05), shadow elevation
- **Buttons**: Gradient shift, color transition
- **Links**: Underline animation, color change to blue

### GSAP Animations
- **Hero**: Parallax background elements
- **Counters**: Animate numbers on scroll trigger
- **Smooth Scroll**: Smooth page scrolling
- **Stagger**: Card animations stagger by 0.1s

### Interactive Elements
- **Ripple Effect**: On button clicks
- **Particle Background**: Subtle floating particles in hero
- **Hover Particles**: Small elements follow cursor in key sections

## Page Structure

### Sections (in order)
1. **Hero** with animated background, tagline, CTAs
2. **Stats Dashboard** with animated counters
3. **Why Choose Us** with key pillars in cards
4. **Services** (Students, Professionals, Corporates) with hover cards
5. **How It Works** - 4-step process with icons
6. **Testimonials** carousel
7. **Packages** pricing cards
8. **Founder Profile** with photo, bio, certifications
9. **Contact** with form, phone, email, location, social links
10. **Footer** with quick links, copyright

## Images

### Hero Section
- **No large hero image** - Instead use animated background (gradients, particles, or Three.js canvas)
- Keeps focus on text and CTAs

### Founder Section
- Profile photo of Santosh S Jaiswal (provided)
- Circular or rounded square, positioned left or center
- Size: 200-300px diameter

### Logo
- Mentoria logo (provided) in navigation header
- Height: 40-50px, maintains aspect ratio
- White or transparent background version

### Service Icons
- Use Heroicons or Font Awesome for:
  - Students: Academic cap icon
  - Professionals: Briefcase icon
  - Corporates: Building icon
  - Career guidance: Map icon
  - Workshops: Users icon

## Accessibility
- Color contrast ratio minimum 4.5:1 for text
- Focus states on all interactive elements
- Keyboard navigation support
- Alt text for all images
- Semantic HTML structure

## Responsive Breakpoints
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3+ columns)