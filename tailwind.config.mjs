/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a', // 深いブラックで高級感を演出
          light: '#1a1a1a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#00d4ff', // エレクトリックブルー
          warm: '#ff6b35', // サンセットコーラル
          neon: '#39ff14', // ネオングリーン
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
          muted: '#f8f9fa',
        },
        text: {
          DEFAULT: '#1a1a1a',
          muted: '#6b7280',
          light: '#9ca3af',
        },
        gradient: {
          from: '#667eea',
          to: '#764ba2',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', '"Hiragino Sans"', 'Meiryo', 'sans-serif'],
        jp: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow': '0 0 40px rgba(57, 255, 20, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: false,
  },
};
