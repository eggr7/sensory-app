# 🚀 Sensory App  
**Beer Evaluation Made Simple**  
A full-stack mobile solution that empowers brewers and tasters to capture, score and analyze beer samples by color, foam and turbidity.  

[![GitHub repo](https://img.shields.io/badge/github-sensory--app-blue?logo=github)](https://github.com/eggr7/sensory-app)   [![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📋 Table of Contents
1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [Tech Stack & Architecture](#tech-stack--architecture)  
4. [Repository Structure](#repository-structure)  
5. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation & Setup](#installation--setup)  
   - [Running Locally](#running-locally)  
6. [Usage](#usage)  
7. [Contributing](#contributing)  
8. [Roadmap](#roadmap)  
9. [License](#license)  

---

## 🔍 Overview
The **Sensory App** is designed to streamline the beer tasting workflow.  
- Capture photos of your beer samples via mobile camera  
- Automate color, foam and turbidity analysis with a FastAPI backend  
- Record sensory scores (aroma, body, bitterness) alongside visual metrics  
- Sync data offline and visualize historical tastings  

Built with scalability and modularity in mind, Sensory App can be extended to any beverage-quality evaluation use case.

---

## ✨ Key Features
- **📷 Camera Capture** – Seamless photo acquisition on iOS & Android (Expo)  
- **⚙️ Automated Analysis** – Color (RGB/HSV), foam coverage, turbidity via OpenCV  
- **📝 Sensory Scoring** – Structured form for aroma, flavor, appearance  
- **🌐 Offline-first** – Local caching and background sync to backend  
- **📊 History & Reports** – Timeline view of past evaluations with chart exports  

---

## 🏗️ Tech Stack & Architecture
**Frontend**  
- React Native + Expo (with `expo-router`)  
- Expo Camera for cross-platform photo API  
- Axios for HTTP client  

**Backend**  
- Python 3.10+, FastAPI  
- OpenCV & Pillow for image processing  
- Uvicorn ASGI server  
- PostgreSQL (planned) / SQLite for quickstart  

**Architecture Diagram**  
Mobile App (Expo) 
└─ POST /sensory/photo → FastAPI 
├─ analyze: OpenCV 
└─ store: DB ↲ GET /sensory/history → App

## 🗂️ Repository Structure

sensory-app/ ├── frontend/ # Expo + React Native │ ├── app/ # Screen routes (expo-router) │ ├── components/ # Reusable UI elements │ ├── assets/ # Images, icons │ └── hooks/ # Custom React hooks │ └── backend/ # FastAPI service ├── app/ │ ├── api/ # Route definitions │ ├── services/ # Business logic & image analysis │ ├── models/ # Pydantic schemas & DB models │ └── main.py # Application entry point ├── requirements.txt # Python deps └── Dockerfile # Container config (optional for now)


---

## 🛠️ Getting Started

### Prerequisites
- Node.js ≥16 & NPM or Yarn  
- Expo CLI (`npm install -g expo-cli`)  
- Python 3.10+ & pip  
- (Optional) PostgreSQL or SQLite  

### Installation & Setup

1. **Clone repo**  
   ```bash
   git clone https://github.com/eggr7/sensory-app.git
   cd sensory-app

2. Create & activate Python env

cd backend
python -m venv venv
source venv/bin/activate    # Windows: .\venv\Scripts\activate
pip install -r requirements.txt

3. Install frontend deps

cd ../frontend
npm install

**Running Locally**
1. Start Backend

cd backend
uvicorn app.main:app --reload --port 8000

2. Start Frontend

cd ../frontend
npm start

Scan the QR code in Expo Go (iOS/Android) or open a web emulator.

Usage
Open Sensory App on your device.

Navigate to “Evaluate” → “Camera”.

Capture your beer sample.

Fill out aroma, flavor and appearance scores.

Submit to run visual analysis & save your session.

Browse past sessions under “History”.

🤝 Contributing
Contributions are welcome! To propose a feature or fix:

Fork this repository

Create a branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m "feat: add X")
Push (git push origin feature/my-feature)

Open a Pull Request

Please read CONTRIBUTING.md for more guidelines.

🛣️ Roadmap
[ ] On-device ML inference with TensorFlow Lite

[ ] Real-time foam detection overlay

[ ] User authentication & multi-tenant support

[ ] Export to PDF/CSV reports