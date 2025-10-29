# STRIDE Website

A modern, responsive static website for **STRIDE** (Society for Technical Resources, Innovation & Development of Engineers) - an NGO focused on empowering engineering students and young professionals.

## 🚀 Features

- **4 Complete Pages**: Home, Events, Hackathon, and Community
- **3 Registration Modals**: Membership, Events, and Hackathon registration with QR codes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile menu, accordions, smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Design System

### Brand Colors

- **Primary Blue**: `#3B82F6`
- **Navy**: `#0F172A`
- **Light Blue**: `#60A5FA`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components

- Sticky navigation with mobile hamburger menu
- Card-based layouts with hover effects
- Gradient backgrounds and smooth transitions
- Modal system with overlay and animations

## 📁 Project Structure

```
stride-website/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── logo-icon.png
│   │       ├── logo-full.png
│   │       ├── logo-text.png
│   │       ├── launch-event.png
│   │       └── qr-placeholder.png
│   ├── index.html
│   ├── events.html
│   ├── hackathon.html
│   └── community.html
├── src/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: For interactions and modals
- **Vite**: Development server and build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd stride-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Pages Overview

### 1. Home Page (`index.html`)

- Hero section with STRIDE branding
- About STRIDE section with mission
- 7 core objectives with icons
- Membership benefits
- Call-to-action sections

### 2. Events Page (`events.html`)

- Featured Internal Launch event
- Upcoming hackathon teaser
- Event newsletter signup
- Registration modal

### 3. Hackathon Page (`hackathon.html`)

- "Hack for GAZA" detailed information
- 7 engineering domain problem statements
- Timeline and prizes
- Rules, FAQs, and registration

### 4. Community Page (`community.html`)

- 8 engineering domains showcase
- Interdisciplinary opportunities
- Domain-specific community benefits

## 🎯 Key Features

### Registration Modals

Three modal systems for different registration types:

1. **Membership Registration**: Triggered by "Join STRIDE" button
2. **Event Registration**: Triggered by "Register for Events" button
3. **Hackathon Registration**: Triggered by "Register for Hack for GAZA" button

Each modal includes:

- QR code placeholder
- Registration button (placeholder link)
- Close functionality (X button or overlay click)
- Smooth animations

### Interactive Elements

- Mobile-responsive hamburger menu
- FAQ accordions with smooth animations
- Problem domain expandable cards
- Smooth scroll navigation
- Active page highlighting

### Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interface
- Optimized images and performance

## 📝 Content Management

### TODO Items for Client

The following items need to be updated with actual information:

#### QR Codes

- [ ] Replace `qr-placeholder.png` with actual QR codes for:
  - Membership registration
  - Event registration
  - Hackathon registration

#### Registration Links

- [ ] Update placeholder `href="#"` links in modals with actual Google Forms or registration URLs
- [ ] Test all registration flows

#### Contact Information

- [ ] Update email: `contact@stride.org.in` (placeholder)
- [ ] Update phone: `+91 XXXXX XXXXX` (placeholder)
- [ ] Add actual office address in Hyderabad

#### Social Media Links

- [ ] Update all social media links (currently `href="#"`):
  - LinkedIn
  - Twitter/X
  - Instagram
  - GitHub
  - YouTube

#### Event Details

- [ ] Update hackathon dates (currently placeholder dates in Feb 2025)
- [ ] Update prize amounts (currently ₹50,000 total with breakdown)
- [ ] Add actual registration deadlines

#### Newsletter Integration

- [ ] Connect newsletter form to backend service (Mailchimp, SendGrid, etc.)
- [ ] Add form validation and success messages

## 🎨 Customization

### Colors

Update brand colors in `tailwind.config.js`:

```javascript
colors: {
  'stride': {
    'blue': '#3B82F6',      // Primary blue
    'navy': '#0F172A',      // Dark navy
    'light-blue': '#60A5FA', // Light blue
  }
}
```

### Fonts

Change fonts in `src/css/main.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap");
```

### Content

- Update mission, objectives, and descriptions in HTML files
- Replace placeholder images with actual photos
- Add real testimonials and success stories

## 🚀 Deployment

### Simple Static Hosting

The built files can be deployed to any static hosting service:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload `dist/` folder contents** to your hosting provider:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Traditional web hosting

### Server Configuration

#### Nginx Example

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/stride-website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 Development

### Adding New Pages

1. Create new HTML file in `public/` directory
2. Copy navigation and footer from existing pages
3. Update navigation links in all pages
4. Add page to build process

### Modifying Styles

- Use Tailwind utility classes for quick changes
- Add custom styles in `src/css/main.css`
- Update component classes in the CSS file

### Adding JavaScript Functionality

- Add new functions to `src/js/main.js`
- Follow existing patterns for modals and interactions
- Test across different browsers and devices

## 📊 Performance

### Optimization Features

- Tailwind CSS purging unused styles
- Optimized images (WebP conversion recommended)
- Lazy loading for images below fold
- Minified CSS and JS in production
- Efficient font loading with Google Fonts

### Performance Targets

- Page load time: < 3 seconds
- Lighthouse score: > 90
- Mobile-friendly design
- Accessibility compliance

## 🧪 Testing

### Browser Compatibility

Tested on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing

- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 📞 Support

### Development Questions

- Project Manager: [Name]
- Email: [Email]
- GitHub Repository: [URL]

### Content Questions

- Content Lead: [Name]
- Email: [Email]

## 📄 License

© 2025 STRIDE - Society for Technical Resources, Innovation & Development of Engineers. All rights reserved.

---

**Built with ❤️ for the engineering community**

_Last Updated: January 2025_  
_Version: 1.0_
