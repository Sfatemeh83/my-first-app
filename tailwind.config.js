/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FDF5F2', cream: '#F4EADF', champagne: '#C4A06A', gold: '#B38B4D',
        blush: '#EBCDC1', rose: '#C9998D', cocoa: '#6B4A3C', espresso: '#1E1613', ink: '#3A2A24',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.22em' },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(22px)' }, to: { opacity: 1, transform: 'none' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'none' } },
        slideDown: { from: { opacity: 0, transform: 'translateY(-12px)' }, to: { opacity: 1, transform: 'none' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite', fadeUp: 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
        fadeIn: 'fadeIn .6s ease both', slideIn: 'slideIn .45s cubic-bezier(.2,.7,.2,1) both',
        slideDown: 'slideDown .35s ease both', shimmer: 'shimmer 1.6s linear infinite',
      },
    },
  },
  plugins: [],
}
