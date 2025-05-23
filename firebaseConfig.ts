// C:\necxis assign project\nextjs-expo-assignment\web-app\firebaseConfig.ts

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKx1FmrNAR7cwshqtGevfxoIZMqlyVr8Q",
  authDomain: "necxis-assignment-db604.firebaseapp.com",
  projectId: "necxis-assignment-db604",
  storageBucket: "necxis-assignment-db604.firebasestorage.app",
  messagingSenderId: "585787241053",
  appId: "1:585787241053:web:09f1181d6fc150cdf493b4",
  // measurementId: "G-H5M30P852E" // KEEP THIS COMMENTED OUT. Important!
};

const app = initializeApp(firebaseConfig);

let messagingInstance: any = null; // Initialize as null

// This check is CRITICAL: only initialize Firebase Messaging if window exists AND has addEventListener (i.e., not in WebView/SSR)
if (
  typeof window !== "undefined" &&
  typeof window.addEventListener === "function"
) {
  console.log(
    "Next.js: Browser environment detected. Attempting to initialize Firebase Messaging."
  );
  try {
    // Dynamically import getMessaging. This prevents the module from being loaded/executed
    // in server-side or WebView environments where 'window' APIs are missing.
    import("firebase/messaging")
      .then(({ getMessaging }) => {
        messagingInstance = getMessaging(app);
        console.log(
          "Next.js: Firebase Messaging successfully initialized for web."
        );
      })
      .catch((error) => {
        console.warn(
          "Next.js: Firebase Messaging dynamic import/initialization failed (expected in WebView):",
          error
        );
      });
  } catch (error) {
    console.warn(
      "Next.js: Firebase Messaging initialization block failed (outer catch):",
      error
    );
  }
} else {
  console.log(
    "Next.js: Skipping Firebase Messaging initialization (not a full browser environment or addEventListener is missing)."
  );
}

export default app;
export { messagingInstance }; // Export it for conditional use in other client components
