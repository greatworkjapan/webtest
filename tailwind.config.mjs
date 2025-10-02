/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a3a', // 深いグリーンで高級感を演出
          light: '#2a5a5a',
        },
        accent: {
          DEFAULT: '#d4af37', // ゴールドをアクセントに
          warm: '#c49b26',
        },
        background: '#f8f8f8', // ソフトな背景色
        text: '#333333',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', '"Hiragino Sans"', 'Meiryo', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: false,
  },
};
