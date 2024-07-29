import type { Config } from "tailwindcss"

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      backgroundImage:{
        'hero-bg': 'url("/assets/home/hero/img1.webp")',
        'hero-bg2': 'url("/assets/home/hero/img2.webp")',
        'hero-bg3': 'url("/assets/home/hero/img3.webp")',
        'domaine-bg': 'url("/assets/home/bg-design/domaine.png")',
        'contact-bg': 'url("/assets/home/bg-design/contact.png")',
        'solution-bg': 'url("/assets/home/bg-design/solution.png")',
        'footer-bg': 'url("/assets/home/bg-design/footer.png")',
        'testy-bg': 'url("/assets/home/bg-design/testy.png")',
        'auth-bg': 'url("/assets/home/bg-design/auth.png")',
        'confiance-bg': 'url("/assets/home/bg-design/confiance.png")',
        'formation-hero-bg': 'url("/assets/detail_cartegorie/bg-design/hero.png")',
        'formation-section1': 'url("/assets/detail_cartegorie/bg-design/section1.png")',
        'formation-section2': 'url("/assets/detail_cartegorie/bg-design/section2.png")',
        'formation-section3': 'url("/assets/detail_cartegorie/bg-design/section3.png")',
        'formation-section4': 'url("/assets/detail_cartegorie/bg-design/section4.png")',
        'formation-section5': 'url("/assets/detail_cartegorie/bg-design/section5.png")',
        'formation-section6': 'url("/assets/detail_cartegorie/bg-design/section6.png")',
        'formation-section7': 'url("/assets/detail_cartegorie/bg-design/section7.png")',
        'formation-section8': 'url("/assets/detail_cartegorie/bg-design/section8.png")',
        'catalogue-bg1': 'url("/assets/detail_cartegorie/girl2.png")',
        'detail-hero-bg': 'url("/assets/detail_formation/hero_bg.png")',
        'detail-main-bg': 'url("/assets/detail_formation/main_bg.png")',
        'domaine-main-bg': 'url("/assets/domaine/bg.png")',
      },
      listStyleType:{
        square: 'square',
        roman: 'upper-roman',
        arrow: '>'
      },
      colors: {
        'custom-blue':'#002060',
        'custom-black': '#2F2E2C',
        'custom-orange': '#f99d1c',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config