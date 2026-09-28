# ByteSpace

ByteSpace is a modern, responsive web application for learning and accessing hundreds of digital courses. It was designed with a beautiful, pixel-perfect UI tailored for a premium user experience.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication (Demo)

This project features a static, non-dynamic authentication flow for demonstration purposes. There is no real backend database currently connected.

### Sign In Credentials
To access the sign-in flow, navigate to `/login` and use the following pre-filled static credentials:

- **Email:** `admin@mail.com`
- **Password:** `adminadmin`

**How it works:**
1. Upon clicking "Sign In", the application will display a premium animated success modal welcoming you back.
2. After a 2-second delay, you will be automatically redirected to the Home page.

### Registration Flow
Similarly, navigating to `/register` allows you to experience the sign-up flow. Clicking "Continue" will trigger a static success modal and redirect you to the Home page after 2 seconds. No data is actually saved to a server.

## Features

- **Pixel Perfect UI:** Implemented meticulously from SVG designs.
- **Dynamic Routing:** Built with Next.js App Router for dynamic course (`/courses/[id]`) and creator (`/creators/[id]`) pages.
- **Interactive Search:** Real-time query handling on the `/search` page.
- **Responsive:** Fully optimized for mobile and desktop viewing.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`.
