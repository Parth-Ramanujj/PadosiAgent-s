# PadosiAgent - Trusted Insurance Agent Finder

PadosiAgent is a modern React application designed to help users find trusted local insurance agents. It features a premium UI with dark mode elements, responsive design, and location-based search.

## Features

-   **Agent Finder**: Search for agents by name, location, or insurance type.
-   **Location Search**: "Near Me" button to simulate geolocation-based search.
-   **Premium UI**: Dark theme hero sections, glassmorphism effects, and smooth animations.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Lazy Loading**: Pages are lazy-loaded for optimal performance.

## Tech Stack

-   **Framework**: React 18 + Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Routing**: React Router DOM (v6 with v7 future flags enabled)
-   **Animations**: Framer Motion

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components`: Reusable UI components (Hero, Cards, Navigation).
-   `src/pages`: Main application pages (Home, FindAgents, Services, etc.).
-   `src/assets`: Static assets like images and logos.

## Deployment

The project is deployment-ready. Run `npm run build` to generate the `dist` folder, which can be deployed to any static hosting provider like Vercel, Netlify, or GitHub Pages.
