# OralScan AI - Oral Cancer Detection System

## Overview
AI-based oral cancer detection system using a trained Keras model. Patients can upload oral cavity images for AI-powered risk assessment, view results, download PDF reports, and chat with doctors.

## Project Architecture
- **Backend**: Flask (Python) with Keras/TensorFlow for AI predictions
- **Frontend**: Jinja2 templates with Bootstrap 5, FontAwesome, custom CSS/JS
- **Model**: `oral_cancer_model.h5` - pre-trained Keras model for oral cancer detection
- **Storage**: In-memory patient records (no database)

## Project Structure
```
app.py              - Flask backend with all routes
models.py           - SQLAlchemy models (reference, not actively used)
oral_cancer_model.h5 - Trained AI model
templates/
  base.html         - Base template with navbar, footer, CDN links
  main.html         - Landing page with hero, about, features
  login.html        - Login/register page
  welcome.html      - Welcome page after login
  index.html        - Screening form with image upload & symptoms
  result.html       - Prediction results with confidence bar & PDF download
  patient_dashboard.html - Patient's screening history (card layout)
  doctor_dashboard.html  - Doctor's patient records (table layout)
  chat.html         - Patient chat interface (WhatsApp-style)
  chat_doctor.html  - Doctor chat interface (WhatsApp-style)
static/
  css/style.css     - Custom styles (healthcare theme, blue/white/gray)
  js/main.js        - Drag-drop, image preview, spinners, habit toggles
  uploads/          - Uploaded patient images
  audio/            - Uploaded audio files
```

## Key Routes
- `/` - Landing page
- `/login` - Login/Register (auto-creates users)
- `/index` - Screening form
- `/predict` - AI prediction (POST)
- `/result` - Result display
- `/patient_dashboard` - Patient records
- `/doctor_dashboard` - All patient records for doctors
- `/chat` & `/chat_doctor` - Chat system
- `/download_pdf` - Generate PDF report
- `/flag_follow_up` & `/unflag_follow_up` - Follow-up management
- `/delete_record` - Delete patient record
- `/logout` - Session logout

## Important Notes
- Backend logic, prediction code, and model file must NOT be modified
- Frontend is server-rendered using Flask's render_template()
- Session-based authentication with simple username/password
- The app runs on port 5000
