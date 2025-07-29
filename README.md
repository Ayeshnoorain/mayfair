# Mayfair Luxe Living - Luxury Interior Design Website

A modern, responsive luxury interior design website built with Flask, featuring fresh talent and innovative design approaches.

## Features

- **Modern Luxury Design**: Elegant, sophisticated design with gold accents and premium styling
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, form handling, and dynamic content
- **Consultation Forms**: Lead generation forms with backend processing
- **Multiple Pages**: Home, About, Gallery, Process, Testimonials, and Contact pages
- **Vercel Ready**: Optimized for deployment on Vercel

## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel

## Project Structure

```
mayfair/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── vercel.json           # Vercel configuration
├── README.md             # Project documentation
├── templates/            # HTML templates
│   ├── base.html         # Base template
│   ├── index.html        # Homepage
│   ├── about.html        # About page
│   ├── gallery.html      # Gallery page
│   ├── process.html      # Process page
│   ├── testimonials.html # Testimonials page
│   └── contact.html      # Contact page
└── static/               # Static assets
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── main.js       # Main JavaScript
    └── images/           # Image assets
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mayfair
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   # On Windows
   .\venv\Scripts\Activate.ps1
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the website**
   Open your browser and go to `http://localhost:5000`

## Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository and deploy

## Key Features

### Homepage
- Hero section with consultation form
- Features showcase
- Statistics and achievements
- Process overview
- Services grid
- About section

### About Page
- Company story and values
- Team showcase
- Statistics
- Why choose us section

### Gallery Page
- Filterable project gallery
- Category-based filtering
- Project showcases

### Process Page
- Detailed 4-step process
- Process benefits
- Call-to-action sections

### Testimonials Page
- Client testimonials with ratings
- Featured awards and recognition
- Social proof elements

### Contact Page
- Contact form
- Contact information
- FAQ section
- Map placeholder

## Customization

### Colors
The main luxury accent color is `#c4a661` (gold). You can modify this in `static/css/style.css` by changing the `.luxury-accent` class.

### Content
Update the content in the HTML templates to match your business information, services, and branding.

### Images
Replace placeholder images in the gallery and other sections with actual project photos.

## Form Handling

The website includes consultation forms that send data to the backend. Currently, the forms return a success message. To implement actual email sending or database storage, modify the `/submit_consultation` route in `app.py`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Responsive images
- Fast loading times
- SEO-friendly structure

## License

This project is created for Mayfair Luxe Living. All rights reserved.

## Support

For support or questions, contact the development team or refer to the documentation. 