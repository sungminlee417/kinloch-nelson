# Kinloch Nelson - Modern Musician Website

A modern, responsive website for fingerstyle guitarist Kinloch Nelson, built with Next.js 15, Tailwind CSS v4, and Sanity CMS.

## 🎸 Features

### **Complete Artist Portfolio**
- **Hero Section** with animated backgrounds and call-to-action buttons
- **Performance Calendar** with upcoming shows and booking information
- **Video Gallery** featuring YouTube performances with modal viewers
- **Recordings Section** with streaming platform integration
- **Press & Testimonials** from music critics and publications
- **Biography** with rich content management
- **Workshop & Instruction** offerings
- **Photo Gallery** with categorized images
- **Contact Form** with inquiry types and social media links
- **External Links** page for streaming platforms and social media

### **Modern Features**
- **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- **Framer Motion Animations** - Smooth page transitions and hover effects
- **Dark Mode Support** - Automatic system preference detection
- **SEO Optimized** - Meta tags, OpenGraph, and structured data
- **Performance Optimized** - Next.js 15 with optimized images and fonts

### **Content Management**
- **Sanity CMS Integration** - Headless CMS for easy content updates
- **Rich Schema Design** - Structured data for performances, recordings, videos, etc.
- **Image Management** - Optimized image delivery with Sanity
- **Real-time Preview** - Live preview of content changes

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd kinloch-nelson
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your Sanity project details:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2023-12-21"
   SANITY_API_TOKEN="your-sanity-api-token"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

4. **Set up Sanity CMS**
   ```bash
   # Navigate to Sanity Studio
   cd sanity
   
   # Install Sanity CLI globally (if not installed)
   npm install -g @sanity/cli
   
   # Login to Sanity
   sanity login
   
   # Create a new Sanity project
   sanity init
   
   # Deploy the studio
   sanity deploy
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Customization

### **Colors & Branding**
The site uses a warm amber/orange color scheme that can be customized in `src/app/globals.css`:

```css
:root {
  --primary: #d97706;        /* Amber-600 */
  --primary-foreground: #ffffff;
  --accent: #fbbf24;         /* Amber-400 */
  /* ... other color variables */
}
```

### **Content Sections**
All content is managed through Sanity CMS with structured schemas for:

- **Performances** - Event details, venues, ticket links
- **Recordings** - Album info, track listings, streaming links  
- **Videos** - YouTube URLs, thumbnails, categories
- **Testimonials** - Quotes, attributions, featured status
- **Workshops** - Class details, pricing, scheduling
- **Photos** - Image galleries with categories
- **Biography** - Artist information and achievements
- **Site Settings** - Global settings, social links, SEO

### **Navigation**
The responsive navigation includes all major sections with mobile-friendly dropdown menus. Items can be added or modified in `src/components/layout/Navigation.tsx`.

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Other Platforms**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure environment variables are configured

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Development

### **Project Structure**
```
kinloch-nelson/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/
│   │   ├── layout/         # Navigation, Footer
│   │   ├── sections/       # Page sections (Hero, Videos, etc.)
│   │   └── ui/             # Reusable UI components
│   └── lib/                # Utilities and helpers
├── sanity/
│   ├── schemas/            # Content schemas
│   └── lib/                # Sanity configuration
└── public/                 # Static assets
```

### **Adding New Content Types**
1. Create schema in `sanity/schemas/`
2. Add to `sanity/schemas/index.ts`
3. Create GROQ queries in `sanity/lib/queries.ts`
4. Build components to display the content

### **Styling Guidelines**
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS variables for colors that might change

## 🎵 Original Website Features

This modern version includes all features from the original Kinloch Nelson website:

- **Performance Calendar** - Shows and venue information
- **YouTube Videos** - Complete performance collection including "A Rose in Spanish Harlem", "Song of India", "Banjectomy", "Song For My Father", "Solitudes", "Once I Had A Secret Love", "Sukiyaki"
- **Recordings** - "Partly On Time: Recordings, 1968-1970" and other releases
- **Press Quotes** - Reviews from Portland Press Herald, Just Jazz Magazine, City Newspaper
- **Media Features** - Fretboard Journal Podcast, Acoustic Guitar Magazine Sessions
- **Workshop Information** - Private instruction and group workshops
- **Dynamic Recording Studios** - Studio information and recording history
- **Social Media Integration** - YouTube, Spotify, Apple Music, Bandcamp
- **Live Stream Support** - Donation links for live streaming performances
- **Contact & Booking** - Professional inquiry handling

## 📄 License

This project is created for Kinloch Nelson's official website. All content and branding are property of Kinloch Nelson.

## 🤝 Contributing

For bugs, feature requests, or improvements, please open an issue or contact the development team.

---

**Built with ❤️ for fingerstyle guitar artistry**
# kinloch-nelson
