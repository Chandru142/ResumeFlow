
<div align="center">
	<img src="public/logo.svg" alt="Resumind Logo" width="120" />
	<h1 align="center">🚀 ResumeFlow: AI-based Resume Builder</h1>
	<p align="center">
		<b>Build your resume with AI, modern UI, and instant PDF export!</b>
	</p>
	<p align="center">
		<a href="https://react.dev" target="_blank"><img src="https://img.shields.io/badge/React-19-blue?logo=react" /></a>
		<a href="https://vitejs.dev" target="_blank"><img src="https://img.shields.io/badge/Vite-4.0-purple?logo=vite" /></a>
		<a href="https://tailwindcss.com" target="_blank"><img src="https://img.shields.io/badge/TailwindCSS-4.0-06b6d4?logo=tailwindcss" /></a>
		<a href="https://strapi.io" target="_blank"><img src="https://img.shields.io/badge/Strapi-Backend-8e44ad?logo=strapi" /></a>
		<img src="https://img.shields.io/badge/License-MIT-green" />
	</p>
</div>

---

## ✨ Features

🧑‍💻 User authentication (Clerk)<br>
📋 Dashboard to manage multiple resumes<br>
📝 Create, edit, and preview resumes<br>
🎨 Theme color customization<br>
⭐ Skills rating and progress bars<br>
🖊️ Rich text editor for experience and summary<br>
📄 Download/share resume as PDF (print-optimized)<br>
📱 Responsive design with Tailwind CSS<br>

---

## 🛠️ Tech Stack

<details>
	<summary>Frontend</summary>
	<ul>
		<li>⚛️ React 19</li>
		<li>⚡ Vite</li>
		<li>🎨 Tailwind CSS</li>
		<li>🔑 Clerk (authentication)</li>
		<li>🔗 Axios (API calls)</li>
		<li>🖼️ Lucide React (icons)</li>
		<li>🔔 Sonner (notifications)</li>
	</ul>
</details>

<details>
	<summary>Backend</summary>
	<ul>
		<li>🚀 Strapi (API & Server)</li>
    <li>🚀 Neon Postgress (Database)</li>

	</ul>
</details>

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/Chandru142/ResumeFlow.git/
cd ResumeFlow-Ai-based-Resume-Builder/resumeFlow
npm install # or yarn install
```

### Environment Setup
- Copy `.env.example` to `.env` and add your Clerk and Strapi API keys.

### Running Locally
```bash
npm run dev
```
App runs at: [http://localhost:5173](http://localhost:5173)

### Backend Setup
- Start your Strapi backend and ensure the API URL matches your frontend config.

---

## 📁 Folder Structure

```bash
resumeFlow/
├── src/
│   ├── pages/           # Main app pages (Dashboard, ResumeEdit, ResumeView, Home)
│   ├── components/      # UI and custom components
│   ├── Context/         # React context for resume info
│   ├── data/            # Dummy data for development
│   ├── lib/             # Utility functions
│   └── service/         # API service layer
├── public/              # Static assets
├── index.html           # App entry point
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT

---

## 👨‍💻 Author

Chandru D ([Chandru142](https://github.com/Chandru142))
