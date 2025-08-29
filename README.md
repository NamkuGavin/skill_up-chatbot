# 🤖 Skill Up Chatbot

## 📌 Description

Skill Up Chatbot adalah aplikasi chatbot berbasis **Next.js** yang terintegrasi dengan **Google Gemini API**.  
Tujuannya untuk membantu pengguna belajar, mencari informasi, dan mendapatkan jawaban cerdas secara interaktif.  
Selain itu, project ini juga jadi sarana latihan membangun aplikasi fullstack modern dengan integrasi AI.

---

## 🧑‍💻 Team

| Name                               | Role               |
| ---------------------------------- | ------------------ |
| [Muhammad Gavin Arasyi]            | Frontend Developer |
| [Muhammad Fadhillah Arasyi]        | Frontend Developer |
| [Muhammad Raihan ]                 | Frontend Developer |
| [Muhammad Ilham Fazari Winatapura] | Frontend Developer |

---

## 🚀 Features

- Menjawab pertanyaan tentang skill untuk industri tertentu
- Memberikan tips membuat CV
- Memberikan informasi tentang industry kerja
- Review CV (Ngasi skor 1-10 dan bentuk persentase) seberapa mungkin cv yang dipakai bakalan tembus administrative dari job yang diincer
- 🎯 **Smart Prompt Examples**: Menampilkan 3 contoh kartu pertanyaan awal (hilang otomatis setelah user mengirim pesan).
- 📊 **Responsive UI**: Tampilan menggunakan TailwindCSS + Radix UI dengan dark/light mode.

---

## 🛠 Tech Stack

**Frontend:**

- Next.js 14
- React 18
- TailwindCSS
- Radix UI
- TypeScript

**Backend:**

- Next.js API Routes
- Google Gemini API (via SDK atau REST)
- Node.js

---

## 🚀 How to Run the Project

### Step 1. Clone the Repository

---

git clone https://github.com/NamkuGavin/skill_up-chatbot
cd your-repo

### Step 2. Install Dependencies

---

npm install
npm install @heroicons/react@2.1.3
npm install ai @ai-sdk/react @ai-sdk/google
npm install react-markdown remark-gfm
npx shadcn@latest add
npm install @google/generative-ai

### Setup Environment Variables

---

GEMINI_API_KEY=your_api_key_here

### Run Development Server

---

npm run dev
Akses di: http://localhost:3000
