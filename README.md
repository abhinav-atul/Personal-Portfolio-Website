# Personal Portfolio Website

A responsive, high-performance personal portfolio website built with **React 19** and **Vite**. This project leverages advanced web graphics and animation libraries to create an immersive user experience, featuring fluid simulations, staggered animations, and interactive UI components.

## 🚀 Tech Stack

This project is built using a modern frontend stack focused on performance and visual fidelity.

### Core Framework & Build Tool
* **[React](https://react.dev/) (v19)**: The library for web and native user interfaces.
* **[Vite](https://vitejs.dev/)**: A build tool that provides a faster development experience with Hot Module Replacement (HMR).
* **[ESLint](https://eslint.org/)**: Pluggable linting utility for JavaScript and React.

### Graphics & Animations
* **[Three.js](https://threejs.org/)**: Used to render the "Liquid Ether" fluid simulation background, providing a high-end, interactive visual layer.
* **[GSAP](https://gsap.com/) (GreenSock Animation Platform)**: Powers complex animations, specifically the `StaggeredMenu` component, enabling precise control over timeline-based entrance and exit animations.
* **[React Bits](https://www.reactbits.dev/)**: A library of animated React components used to enhance UI interactivity.

### Utilities
* **Math.js**: An extensive math library used for calculation utilities within the application.

---

## ✨ UI & UX Features

The user interface is designed with a focus on motion and interactivity.

### 1. Immersive Background (Liquid Ether)
* **Component**: `LiquidEther.jsx`
* **Description**: A full-screen, WebGL-powered fluid simulation that reacts to mouse movement. It uses custom shaders (`advection`, `divergence`, `pressure`, `viscous`) to create a realistic liquid effect.
* **Customization**: Configurable via props for color, speed, and interaction intensity.

### 2. Interactive Navigation (Staggered Menu)
* **Component**: `StaggeredMenu.jsx`
* **Description**: An off-canvas mobile navigation menu featuring a staggered animation reveal.
* **Tech**: Uses **GSAP** timelines to animate menu items and social links sequentially when the menu opens. Includes a custom hamburger toggle that morphs into a close icon.

### 3. Dynamic Hero Section
* **Features**:
    * **Typing Effect**: The name "Abhinav Atul" features a CSS-based typewriter animation with a blinking caret.
    * **Wave Animation**: A playful hand-wave animation on the "Hi there" text.
    * **Glassmorphism Header**: The navigation bar uses a backdrop-filter blur to blend seamlessly with the scrolling content.

### 4. Visual Components
* **Electric Border**: A custom component (`ElectricBorder.jsx`) available for wrapping project cards or sections with an animated, glowing border effect.
* **Timeline Layout**: A vertical timeline connecting education and work experience milestones with connecting lines and dots.
* **Infinite Scroll**: A CSS-only infinite scrolling carousel for displaying certifications.

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, icons)
├── components/         # Reusable UI components
│   ├── ElectricBorder.jsx  # Animated border wrapper
│   ├── LiquidEther.jsx     # Three.js background simulation
│   └── StaggeredMenu.jsx   # GSAP-powered mobile menu
├── App.jsx             # Main application layout and content
├── App.css             # App-specific styles
├── index.css           # Global styles, variables, and animations
└── main.jsx            # Application entry point
```
---

## 🛠️ Setup & Installation

Follow these steps to get the project running locally on your machine.

### Prerequisites

Ensure you have **Node.js** installed on your system.

### Steps

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/abhinav-atul/personal-portfolio-website.git](https://github.com/abhinav-atul/personal-portfolio-website.git)
    cd personal-portfolio-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will start and typically be accessible at `http://localhost:5173`.

4.  **Build for production** (optional)
    To generate the production build in the `dist` folder:
    ```bash
    npm run build
    ```
