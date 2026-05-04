// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./registry/**/*.{ts,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: "hsl(var(--card))",
//         "card-foreground": "hsl(var(--card-foreground))",
//         popover: "hsl(var(--popover))",
//         "popover-foreground": "hsl(var(--popover-foreground))",
//         primary: "hsl(var(--primary))",
//         "primary-foreground": "hsl(var(--primary-foreground))",
//         secondary: "hsl(var(--secondary))",
//         "secondary-foreground": "hsl(var(--secondary-foreground))",
//         muted: "hsl(var(--muted))",
//         "muted-foreground": "hsl(var(--muted-foreground))",
//         accent: "hsl(var(--accent))",
//         "accent-foreground": "hsl(var(--accent-foreground))",
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-8px)" },
//         },
//         "shimmer-slide": {
//           "0%": { transform: "translateX(-100%)" },
//           "100%": { transform: "translateX(100%)" },
//         },
//       },
//       animation: {
//         float: "float 3s ease-in-out infinite",
//         "shimmer-slide": "shimmer-slide 2s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;







import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./registry/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        popover: "hsl(var(--popover) / <alpha-value>)",
        "popover-foreground": "hsl(var(--popover-foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "shimmer-slide": "shimmer-slide 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;