/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Latar Belakang Utama (80% Area Layar) - Sejuk di mata
        salaka: {
          light: '#F2F4F7', // Salaka Alusu' (Soft Silver)
          base: '#E5E9F0',
          border: '#D8DEE9',
          metallic: '#CBD5E1',
        },
        // Aksen Utama Merah Menyala Khas Makassar
        eja: {
          DEFAULT: '#C8102E', // Eja Lamming Utama
          dark: '#A60B23',
          maroon: '#7A0012',
        },
        // Aksen Kedua Emas Kerajaan
        bulaeng: {
          light: '#FFD700',
          DEFAULT: '#D4AF37', // Emas Kerajaan
          dark: '#B8860B',
        },
        // Permukaan Kartu & Kertas Konten
        lontar: {
          cream: '#FDFBF7', // Krem Hangat Lontar
          soft: '#F7F2E7',
        },
        // Tinta Aksara Lontara
        ink: {
          navy: '#1B2A4A', // Biru Navy Goresan Aksara
        },
        // Tipografi Gelap
        leleng: {
          DEFAULT: '#111827', // Le'leng Hitam Arang
          slate: '#334155',
          body: '#374151',
        },
      },
      fontFamily: {
        lontara: ['"Noto Sans Buginese"', 'sans-serif'],
        display: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card-gold': '0 4px 20px -2px rgba(212, 175, 55, 0.15)',
        'card-hover': '0 10px 25px -3px rgba(200, 16, 46, 0.2)',
      },
    },
  },
  plugins: [],
};

