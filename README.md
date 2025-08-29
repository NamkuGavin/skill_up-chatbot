# 🤖 Skill Up Chatbot

## 📌 Description

Skill Up Chatbot adalah aplikasi chatbot berbasis **Next.js** yang terintegrasi dengan **Google Gemini API**.  
Tujuannya untuk membantu pengguna belajar, mencari informasi, dan mendapatkan jawaban cerdas secara interaktif.  
Selain itu, project ini juga jadi sarana latihan membangun aplikasi fullstack modern dengan integrasi AI.

---

## 🧑‍💻 Team

| Name                               | Role               |
| ---------------------------------- | ------------------ |
| [Muhammad Gavin Arasyi]            | Project Manager    |
| [Muhammad Fadhillah Arasyi]        | Frontend Developer |
| [Muhammad Raihan ]                 | Frontend Developer |
| [Muhammad Ilham Fazari Winatapura] | Frontend Developer |

---

## 🚀 Features

- 🔐 **Authentication**: Login/Logout user (opsional dengan NextAuth atau Firebase).
- 🤖 **AI Chatbot (Gemini)**: Pengguna bisa bertanya dan mendapatkan jawaban real-time dari Google Gemini API.
- 💾 **Chat History**: Simpan riwayat percakapan agar bisa dilanjutkan.
- 🖼 **File Upload**: Pengguna dapat upload gambar/file untuk dianalisis AI.
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

git clone https://github.com/your-github-username/your-repo.git
cd your-repo

### Step 2. Install Dependencies

---

npm install

### Setup Environment Variables

---

VITE_GEMINI_API_KEY=your_api_key_here

### Run Development Server

---

npm run dev
Akses di: http://localhost:3000
