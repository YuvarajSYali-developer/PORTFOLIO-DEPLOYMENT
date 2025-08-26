# Yuvaraj S Yali - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer and UI/UX Designer.

## 🌟 Features

- **Modern Design**: Glass morphism effects with gradient backgrounds
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Particle Background**: Dynamic particle system using particles.js
- **AI Project Generator**: Interactive tool to generate project ideas
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Advanced animations
- **Particles.js**: Background particle effects
- **Typed.js**: Typing animation effects

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── styles/                 # CSS files
│   ├── main.css           # Core styles
│   ├── animations.css     # Animation keyframes
│   └── responsive.css     # Media queries
├── js/                    # JavaScript files
│   ├── main.js           # Core functionality
│   ├── animations.js     # Animation logic
│   ├── particles.js      # Particle system
│   └── ai-generator.js   # AI project generator
├── assets/               # Static assets
│   ├── profile.jpg       # Profile image
│   └── favicon.ico       # Website favicon
└── README.md             # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Open the Website**
   - Double-click `index.html` to open in your browser
   - Or use a local server for better development experience

3. **Using a Local Server (Recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the Website**
   - Open your browser and go to `http://localhost:8000`

## 🎨 Customization

### Personal Information
Edit the following files to customize your portfolio:

1. **Profile Information** (`index.html`)
   - Update name, title, and description
   - Replace profile image in `assets/profile.jpg`
   - Update social media links

2. **Skills** (`js/main.js`)
   - Modify `skillsData` array in `loadSkillsData()` function
   - Add/remove skill categories and technologies

3. **Projects** (`js/main.js`)
   - Update `projectsData` array in `loadProjectsData()` function
   - Add your own projects with images, descriptions, and links

4. **Experience** (`js/main.js`)
   - Modify `experienceData` array in `loadExperienceData()` function
   - Add your work experience and achievements

### Styling
1. **Colors** (`styles/main.css`)
   - Update CSS custom properties for brand colors
   - Modify gradient colors in `.accent-color` and `.gradient-text`

2. **Animations** (`styles/animations.css`)
   - Customize animation durations and effects
   - Add new keyframe animations

3. **Responsive Design** (`styles/responsive.css`)
   - Adjust breakpoints for different screen sizes
   - Modify mobile-specific styles

### AI Project Generator
To enable real AI functionality:

1. **Get API Key**
   - Sign up for Google Gemini API
   - Get your API key from Google AI Studio

2. **Configure API** (`js/ai-generator.js`)
   - Uncomment the API call section
   - Replace `apiKey` with your actual API key

3. **Test the Feature**
   - Enter topics in the AI generator
   - Verify responses are working correctly

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px and above
- **Large Tablet**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile Large**: 576px - 767px
- **Mobile Medium**: 375px - 575px
- **Mobile Small**: 320px - 374px

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Minified Assets**: CSS and JS are optimized
- **CDN Libraries**: External libraries loaded from CDN
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Particle Optimization**: Reduced particle count on mobile

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph protocol
- Structured data markup
- Optimized images with alt text
- Fast loading times

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Get a custom domain (optional)

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic deployments on push

## 📈 Analytics (Optional)

Add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add the tracking code to `index.html` before `</head>`
3. Monitor website performance and user behavior

## 🔒 Security Considerations

- No sensitive data in client-side code
- API keys should be stored securely (server-side)
- HTTPS recommended for production
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: yuvarajyali@gmail.com
- **LinkedIn**: [Yuvaraj S Yali](https://www.linkedin.com/in/yuvaraj-s-yali/)
- **GitHub**: [YuvarajSYali-developer](https://github.com/YuvarajSYali-developer)

## 🙏 Acknowledgments

- Icons from [Icons8](https://icons8.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animation libraries: GSAP, Particles.js, Typed.js
- CSS framework: Tailwind CSS

---

**Built with ❤️ by Yuvaraj S Yali**
