# 📝 Django + React Todo App

A simple **Todo Application** built with **Django (backend)** and **React (frontend)**.  
This project was created for learning purposes — to explore how React can communicate with a Django REST API.

---

## 🚀 Features
- Add, view, and delete todos  
- Backend API powered by **Django REST Framework**  
- Frontend built with **React (Create React App)**  
- CORS enabled for frontend-backend connection  

---

## 🛠️ Tech Stack
- **Backend:** Django, Django REST Framework  
- **Frontend:** React, Axios  
- **Database:** SQLite (default)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/django-react-todo.git
cd django-react-todo

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

cd ../frontend
npm install
npm start
