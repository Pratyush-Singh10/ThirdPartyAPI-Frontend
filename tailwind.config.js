/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-Cover': "url(https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=1024x1024&w=is&k=20&c=DDQn_dYm4qaOcMBuelgjfGM6xjvHZdHQ_Y08BhvsqaU=)"
      },
      colors :{
        'label': '#1e293b'
      },
      boxShadow :{
        "customShadow" : "0px 10px 30px 10px #28283d"
      }
  },
  plugins: [],
  }
}