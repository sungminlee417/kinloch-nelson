# Kinloch Nelson - Sanity Data Structure

This directory contains sample data files organized by page/content type for the Kinloch Nelson website. Each file represents the content structure for a specific page or section of the site.

## Data Files by Page

### Core Pages
- **`homepage.json`** - Homepage content including hero, featured videos, recordings, testimonials, and upcoming shows
- **`biography-page.json`** - Complete biography page with artist profile, musical development, and career highlights
- **`videos-page.json`** - Video collection page with all YouTube performances and categories
- **`recordings-page.json`** - Discography page featuring albums and streaming links
- **`performances-page.json`** - Performance calendar with upcoming shows and booking information

### Additional Pages
- **`press-page.json`** - Press kit with bio, quotes, media features, and assets
- **`contact-page.json`** - Contact form and booking information
- **`links-page.json`** - All streaming platforms, social media, and external links
- **`workshops-page.json`** - Educational offerings and teaching information
- **`projects-page.json`** - Musical projects and collaborations
- **`stanley-watson-page.json`** - Collaboration information
- **`studio-page.json`** - Dynamic Recording Studios information
- **`photos-page.json`** - Photo gallery structure

### Site Configuration
- **`site-settings.json`** - Global site settings, SEO, and configuration

## Content Structure

Each page file is organized with the following structure:

```json
{
  "_type": "page",
  "_id": "page-id",
  "title": "Page Title",
  "sections": {
    "hero": { ... },
    "content_section_1": { ... },
    "content_section_2": { ... }
  }
}
```

## Key Features Included

### From Original Website
- **All 8 YouTube videos** with exact titles from original site
- **Complete press quotes** with proper attribution
- **"Partly On Time: Recordings, 1968-1970"** album details
- **Media features** (Fretboard Journal Podcast, Acoustic Guitar Magazine)
- **Live Stream Concert Donations** prominently featured
- **All navigation sections** from original 13-item menu

### Modern Enhancements
- **Structured data** for easy CMS management
- **SEO optimization** with meta descriptions and keywords
- **Social media integration** across all platforms
- **Professional contact forms** with inquiry types
- **Comprehensive press kit** with multiple bio lengths

## Usage

1. Import these files into your Sanity Studio
2. Update image references to match your actual image assets
3. Replace placeholder URLs with actual links
4. Customize content as needed for the live site

## Notes

- All YouTube URLs are placeholders and should be updated with actual video links
- Image references use placeholder asset IDs that need to be updated
- Contact email and booking information should be verified
- Social media URLs should be confirmed before going live