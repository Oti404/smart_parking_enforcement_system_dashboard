/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'enforce-bg': '#121826',      // Culoarea de fundal a aplicației
        'enforce-card': '#1e293b',    // Culoarea cardurilor/panourilor
        'enforce-blue': '#2563eb',    // Albastrul de la butoane (ex: Authenticate)
        'enforce-accent': '#3b82f6',  // Albastru mai deschis pentru hover
        'enforce-red': '#ef4444',     // Roșu pentru alerte/respingeri
        'enforce-green': '#22c55e',   // Verde pentru confirmări/succes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fontul modern și curat din mockup
      }
    },
  },
  plugins: [],
}