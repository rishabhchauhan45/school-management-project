# NexusEdu - Premium AI School ERP 🚀

Welcome to the **NexusEdu Platform**, a billion-dollar tier, futuristic AI-powered School Management System built with the MERN stack and highly advanced UI/UX animations.

## 🌟 Features
- **Cinematic UI**: Glassmorphism, 3D tilt effects, parallax scrolling, and animated background particles.
- **Role-Based Dashboards**: Fully responsive Student, Teacher, and Admin SaaS dashboards with integrated Recharts analytics.
- **AI Integration**: Floating AI Chatbot Assistant for instant help and navigation.
- **Secure Architecture**: Complete Express MVC backend, MongoDB integration, and JWT authentication.

## 🛠 Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, Recharts, Lucide Icons.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JSON Web Tokens (JWT), bcrypt.

---

## 🚀 Local Development Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Installation
In the root directory of the project, run the following commands:
```bash
npm install
npm run install:all
```
*This installs `concurrently` in the root, and then installs all dependencies for both the `frontend` and `backend` directories.*

### 2. Environment Variables
Create a `.env` file in the `backend/` folder (it should already be there, but if not, create it):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/school_erp  # Or your MongoDB Atlas connection string
JWT_SECRET=super_secret_futuristic_key_2026
```

### 3. Start Both Servers
To run both the backend (Port 5000) and the frontend (Port 5173) simultaneously:
```bash
npm run dev
```

---

## 🌐 Production Deployment Guide

### Database (MongoDB Atlas)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster.
2. Get your connection string (e.g., `mongodb+srv://<user>:<password>@cluster.mongodb.net/`).
3. Use this URI for the `MONGODB_URI` environment variable when deploying the backend.

### Backend (Render)
1. Push your code to a GitHub repository.
2. Log in to [Render.com](https://render.com) and create a new **Web Service**.
3. Connect your repository.
4. Set the **Root Directory** to `backend`.
5. Set the Build Command to `npm install`.
6. Set the Start Command to `npm start`.
7. In the **Environment Variables** section, add your `MONGODB_URI` and `JWT_SECRET`.
8. Deploy! (Copy the resulting backend URL).

### Frontend (Vercel)
1. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
2. Connect the same GitHub repository.
3. In the "Framework Preset", select **Vite**.
4. Set the **Root Directory** to `frontend`.
5. *Crucial Step*: Open `frontend/vite.config.js` or your API calls, and ensure the fetch URLs point to your newly deployed Render Backend URL instead of `http://localhost:5000`.
6. Click **Deploy**.

## 🎨 Performance & SEO Optimization
- **Images**: All images currently use optimized external URLs (Unsplash). For local assets, ensure they are compressed WebP format.
- **Code Splitting**: Vite automatically handles code splitting during `npm run build`.
- **Responsive Layout**: The entire site utilizes Tailwind's `md:` and `lg:` utility classes to seamlessly scale from mobile phones to ultra-wide displays.
