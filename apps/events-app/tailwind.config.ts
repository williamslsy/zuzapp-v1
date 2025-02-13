/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: "hsl(var(--dark))",
        grayBackground: "#2F3232",
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
        textPrimary: "#ffffff",
        textSecondary: "#ffffff70",
        pagePrimary: "#222222",
        componentPrimary: "#2F3131",
        itemHover: "#393C3C",
        inputField: "#242727",
        inputBgActive: "#FFFFFF",
        buttonDarkNavInactive: "#F1F1F133",
        buttonDarkNavHover: "#F1F1F166",
        trackItemHover: "#434646",
        trackDateColor: "#4D5050",
        itemBgPrimary: "#2D2D2D",
        btnPrimary: "#FFFFFF",
        btnBlue: "#67DAFF",
        btnRed: "#FF5D5D",
        btnYellow: "#F3BE6F",
        btnPrimaryGreen: "#D7FFC4",
        btnStrongerGreen: "#79916E",
        btnStrongerGreenHover: "#96B488",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'Inter Placeholder', 'sans-serif'],
      },
      spacing: {
        '2.5': '10px',
      },
      width: {
        'inherit': 'inherit',
        'fill-available': '-webkit-fill-available',
      },
    },
    screens: {
      'sm': '390px',
      'md': '810px',
      'lg': '1200px',
      'xl': '1400px',
    }
  },
  plugins: [require("tailwindcss-animate")],
}

export { }