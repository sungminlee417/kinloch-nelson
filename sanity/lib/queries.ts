export const PERFORMANCES_QUERY = `*[_type == "performance"] | order(date desc) {
  _id,
  title,
  date,
  venue,
  location,
  description,
  ticketLink,
  isFeatured,
  "image": image.asset->url
}`

export const RECORDINGS_QUERY = `*[_type == "recording"] | order(releaseDate desc) {
  _id,
  title,
  releaseDate,
  "coverImage": coverImage.asset->url,
  description,
  tracks,
  spotifyLink,
  appleMusicLink,
  bandcampLink,
  isFeatured
}`

export const VIDEOS_QUERY = `*[_type == "video"] | order(order asc, publishedAt desc) {
  _id,
  title,
  youtubeUrl,
  "thumbnail": thumbnail.asset->url,
  description,
  category,
  publishedAt,
  isFeatured,
  order
}`

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
  _id,
  quote,
  author,
  publication,
  link,
  "authorImage": authorImage.asset->url,
  isFeatured,
  order
}`

export const WORKSHOPS_QUERY = `*[_type == "workshop" && isActive == true] | order(_createdAt desc) {
  _id,
  title,
  type,
  description,
  duration,
  skillLevel,
  price,
  location,
  schedule,
  contactInfo,
  "image": image.asset->url,
  isActive
}`

export const PHOTOS_QUERY = `*[_type == "photo"] | order(order asc, dateTaken desc) {
  _id,
  title,
  "image": image.asset->url,
  description,
  category,
  dateTaken,
  photographer,
  isFeatured,
  order
}`

export const LINKS_QUERY = `*[_type == "link"] | order(order asc, _createdAt desc) {
  _id,
  title,
  url,
  description,
  category,
  "icon": icon.asset->url,
  isExternal,
  order
}`

export const BIOGRAPHY_QUERY = `*[_type == "biography"][0] {
  _id,
  name,
  tagline,
  location,
  "profileImage": profileImage.asset->url,
  shortBio,
  fullBio,
  influences,
  genres,
  instruments,
  achievements
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  title,
  description,
  "logo": logo.asset->url,
  "favicon": favicon.asset->url,
  contactEmail,
  phone,
  donationLink,
  socialLinks,
  seoSettings
}`

// New page-based queries
export const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  _id,
  heroSection {
    name,
    tagline,
    location,
    shortBio,
    "profileImage": profileImage.asset->url,
    ctaButtons[] {
      text,
      url,
      style
    },
    featuredQuote {
      text,
      attribution
    }
  },
  featuredVideos[] {
    _key,
    title,
    youtubeUrl,
    description,
    category,
    publishedAt,
    isFeatured,
    order
  },
  featuredRecordings[] {
    _key,
    title,
    "coverImage": coverImage.asset->url,
    description,
    releaseDate,
    streamingLinks[] {
      platform,
      url
    },
    isFeatured
  },
  testimonials[] {
    _key,
    quote,
    author,
    publication,
    "authorImage": authorImage.asset->url,
    isFeatured,
    order
  },
  upcomingShows[] {
    _key,
    title,
    date,
    venue,
    location,
    description,
    ticketLink,
    isFeatured
  },
  mediaFeatures[]-> {
    _id,
    title,
    description,
    url,
    publicationDate,
    category,
    isFeatured,
    order
  }
}`

export const VIDEOS_PAGE_QUERY = `*[_type == "videosPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  videos[] {
    _key,
    title,
    youtubeUrl,
    description,
    category,
    publishedAt,
    isFeatured,
    order
  },
  youtubeChannel {
    channelUrl,
    callToAction,
    description
  }
}`

export const SITE_SETTINGS_PAGE_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  siteTitle,
  siteDescription,
  keywords,
  "ogImage": ogImage.asset->url,
  "favicon": favicon.asset->url,
  donationLink,
  analyticsId,
  copyright,
  footerLinks[] {
    title,
    url
  },
  maintenanceMode,
  socialLinks
}`

export const FEATURED_CONTENT_QUERY = `{
  "performances": *[_type == "performance" && isFeatured == true] | order(date desc) [0...3] {
    _id,
    title,
    date,
    venue,
    location,
    "image": image.asset->url
  },
  "recordings": *[_type == "recording" && isFeatured == true] | order(releaseDate desc) [0...3] {
    _id,
    title,
    "coverImage": coverImage.asset->url,
    spotifyLink,
    appleMusicLink,
    bandcampLink
  },
  "videos": *[_type == "video" && isFeatured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    youtubeUrl,
    "thumbnail": thumbnail.asset->url
  },
  "testimonials": *[_type == "testimonial" && isFeatured == true] | order(order asc) [0...3] {
    _id,
    quote,
    author,
    publication
  }
}`

export const PRESS_DATA_QUERY = `{
  "biography": *[_type == "biography"][0] {
    _id,
    name,
    tagline,
    location,
    shortBio,
    fullBio,
    genres,
    instruments,
    achievements
  },
  "testimonials": *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    publication,
    order
  },
  "links": *[_type == "link" && category == "press"] | order(order asc) {
    _id,
    title,
    url,
    description,
    category,
    order
  }
}`

export const PERFORMANCES_PAGE_QUERY = `*[_type == "performancesPage"][0] {
  _id,
  pageHeader {
    title,
    subtitle
  },
  performances[] {
    title,
    date,
    venue,
    location,
    description,
    ticketLink,
    isFeatured
  },
  bookingInfo {
    showBookingSection,
    bookingText,
    bookingEmail
  }
}`

