# 🌐 Next.js Web App: Embedded Content for Hybrid Mobile App

This repository hosts the web application component of a larger hybrid mobile application. It's a modern web interface built with Next.js, specifically designed to provide dynamic content that can be seamlessly embedded and displayed within a native mobile application's WebView.

Here is the link for the WebView.(https://nextjs-webview-web-app.vercel.app/)

It serves as the backend UI for the [Expo WebView Mobile App](https://github.com/Jayant1005/expo-webview-mobile-app) and demonstrates a practical approach to building cross-platform solutions.

{ Note: The basic Functioning of this project has been done. The designing part for this website is underway. I hope you will wait till the updation on this project. }

## ✨ Features

* **Optimized for WebView:** Developed with responsiveness and efficient loading in mind for smooth integration into a mobile WebView.
* **Next.js App Router:** Leverages the latest Next.js App Router for modern routing, server-side capabilities (if needed), and optimized performance.
* **Firebase Integration:** Configured to initialize Firebase, ensuring proper functionality while including a critical guard to prevent Firebase Messaging (a web-specific feature) from attempting to run in non-browser environments like a WebView.
* **Scalable Architecture:** Designed for easy expansion with additional features and pages.
* **Type-Safe Development:** Built with TypeScript for enhanced code quality and maintainability.

## 🚀 Technologies Used

* **Framework:** [Next.js 14.x](https://nextjs.org/)
* **Library:** [React 18.x](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Backend as a Service:** [Firebase SDK](https://firebase.google.com/docs/web/setup)
* **Styling:** CSS Modules (or specify if you used another, e.g., Tailwind CSS)
* **Package Manager:** npm

## 🛠️ Installation & Local Setup

Follow these steps to get a local copy of the web application running on your development machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jayant1005/nextjs-webview-web-app.git](https://github.com/Jayant1005/nextjs-webview-web-app.git)
    cd nextjs-webview-web-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Firebase:**
    * Ensure your Firebase project configuration is correctly set up in `firebaseConfig.ts` in the root of the project.
    * The provided `firebaseConfig.ts` includes a conditional check to handle environments where Firebase Messaging should not be initialized (e.g., within a mobile WebView).

## ▶️ Running the Project Locally

To start the Next.js web application in development mode:

```bash
npm run dev
