module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
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
        gray: {
          50: "hsl(210, 25%, 98%)",
          100: "hsl(210, 20%, 96%)",
          200: "hsl(210, 15%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 8%, 70%)",
          500: "hsl(210, 7%, 54%)",
          600: "hsl(210, 9%, 40%)",
          700: "hsl(210, 11%, 28%)",
          800: "hsl(210, 15%, 18%)",
          900: "hsl(210, 20%, 10%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'headline': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '500' }],
        'headline-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '500' }],
        'body': ['1.125rem', { lineHeight: '1.5', fontWeight: '300' }],
        'body-sm': ['1rem', { lineHeight: '1.5', fontWeight: '300' }],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(207, 74%, 47%) 0%, hsl(187, 58%, 47%) 100%)',
        'gradient-2': 'linear-gradient(180deg, hsl(207, 100%, 98%) 0%, hsl(207, 32%, 95%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(207, 74%, 42%) 0%, hsl(187, 58%, 47%) 100%)',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
