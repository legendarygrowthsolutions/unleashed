# The Woof & Whisker - Dog Bar App

Welcome to the frontend repository for **The Woof & Whisker**, a premium social club for dogs and their humans. This application allows users to register, purchase memberships, manage their dogs' profiles, and for admins to manage the park operations.

## 🚀 Built Features (Frontend)

The static frontend phase is complete. Here is what has been implemented:

### 1. Landing Page
- **Hero Section**: Centered, cinematic layout with "furry" aesthetics and micro-animations.
- **Concept Section**: 3-Card grid highlighting "Safe & Supervised", "Full Bar & Kitchen", and "Community Events".
- **Benefits**: Dog-centric content focusing on nutrition and safety.
- **Testimonials**: Customer reviews with avatar initials.
- **Pricing**: Clear membership tiers (Day Pass, Monthly, Annual).
- **FAQ**: Clean, accordion-style questions.
- **Contact**: Functional-looking contact form.

### 2. Authentication & Onboarding
- **Login / Register**: Branded split-screen layouts.
- **Forgot Password**: Password recovery flow.

### 3. Admin Dashboard (`/admin`)
- **Overview**: Stats cards and recent activity.
- **Member Management**: Searchable list of members and dogs.
- **Add Member Flow**: Dedicated page to register new owners and dogs (`/admin/members/new`).
- **Check-In**: QR code scanner interface (UI).
- **Settings**: Placeholder for app configuration.

### 4. Customer Dashboard (`/dashboard`)
- **Overview**: Membership status and upcoming events.
- **My Dogs**: List view of registered pets with status indicators (`/dashboard/dogs`).
- **Add Dog**: Form to register a new dog and upload vaccine records (`/dashboard/dogs/new`).
- **Profile**: User profile management.

### 5. Design System
- **Theme**: "Furry" and warm aesthetic using customized Shadcn UI components.
- **Dark Mode**: Fully supported via `next-themes`.
- **Responsive**: Mobile-first design for all pages.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Architecture**: Shadcn UI (Radix Primitives)
- **Icons**: Lucide React
- **Theming**: Next-themes
- **Language**: TypeScript

## 🚧 Remaining / Roadmap (Backend Integration)

The following features require backend development (e.g., Supabase, Firebase, or custom API):

- [ ] **Database Connection**: Store users, members, dogs, and check-in logs.
- [ ] **Authentication**: Implement real auth logic (Supabase Auth / NextAuth).
- [ ] **File Storage**: Real image upload for vaccine records and dog photos.
- [ ] **Payments**: Stripe integration for membership purchases.
- [ ] **Real-time**: Live updates for "Dogs currently in park" count.
- [ ] **Email**: Transactional emails for welcome, password reset, and expiration notices.

## 🏃‍♂️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `/src/app`: App Router pages and layouts.
- `/src/components`: Reusable UI components.
    - `/landing`: Components specific to the marketing site.
    - `/dashboard`: Components for the customer portal.
    - `/admin`: Components for the staff portal.
    - `/ui`: Shadcn UI primitives.
- `/public/assets`: Static images and icons.

---

*© 2026 The Woof & Whisker. All rights reserved.*

--
