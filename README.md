# Mayfair Luxe Living - Luxury Interior Design Website

A modern, responsive website for Mayfair Luxe Living, showcasing luxury interior design services with a brochure-inspired gallery and elegant design.

## 🌟 Features

- **Single-Page Application** with smooth scrolling navigation
- **Responsive Design** optimized for all devices
- **Brochure-Style Gallery** with categorized spaces (Living Areas, Kitchen, Bedroom, etc.)
- **Interactive Gallery Filters** with smooth transitions
- **Contact Form** for client inquiries
- **Modern UI/UX** with luxury aesthetics
- **Team Section** featuring key personnel
- **Process Overview** explaining the design workflow

## 🛠️ Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **CSS Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Replit-ready

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Create a virtual environment: `python -m venv venv`
3. Activate the environment: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. Install dependencies: `pip install -r requirements.txt`
5. Run the application: `python app.py`
6. Open http://localhost:8080 in your browser

### Replit Deployment
1. Fork this repository to your GitHub account
2. Go to [Replit](https://replit.com) and create a new project
3. Choose "Import from GitHub" and select your forked repository
4. Click "Run" to start the application

## 📁 Project Structure

```
mayfair/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── replit.nix           # Replit configuration
├── .replit              # Replit run command
├── pyproject.toml       # Python project configuration
├── static/              # Static assets
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Gallery and logo images
├── templates/            # HTML templates
│   ├── base.html        # Base template with navigation
│   └── index.html       # Main homepage content
└── README.md            # Project documentation
```

## 🎨 Design Features

- **Golden Color Scheme** (#c19334) for luxury branding
- **Smooth Animations** and transitions throughout
- **Responsive Gallery** with filterable categories
- **Professional Typography** using premium fonts
- **Mobile-First Design** approach

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Configuration

### Port Configuration
- **Local Development**: Port 8000
- **Replit**: Port 8080 (automatically configured)

### Environment Variables
No environment variables required for basic functionality.

## 📞 Contact Form

The contact form includes fields for:
- First and Last Name
- Email Address
- Phone Number
- Project Type Selection
- Message/Project Description

## 🚀 Deployment

### Replit
- Automatically configured with `replit.nix` and `.replit`
- Python 3.9 environment with all dependencies
- Ready to run with one click

### Other Platforms
- **Vercel**: Use `vercel.json` configuration
- **Heroku**: Add `Procfile` with `web: gunicorn app:app`
- **Traditional Hosting**: Upload files and run with gunicorn

## 📝 License

This project is proprietary to Mayfair Luxe Living.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Mayfair Luxe Living** - Creating extraordinary spaces with fresh talent and innovative ideas. 