"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, Calendar, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroData {
  name: string;
  tagline: string;
  location: string;
  shortBio: string;
  profileImage?: string;
  ctaButtons?: Array<{
    text: string;
    url: string;
    style: "primary" | "secondary";
  }>;
  featuredQuote?: {
    text: string;
    attribution: string;
  };
}

interface SiteSettings {
  _id: string;
  siteTitle: string;
  siteDescription: string;
  donationLink: string;
}

interface HeroSectionProps {
  heroData: HeroData;
  siteSettings: SiteSettings;
}

export default function HeroSection({
  heroData,
  siteSettings,
}: HeroSectionProps) {
  if (!heroData) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="text-center text-gray-600">
          <p>Unable to load content</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  {heroData.name.split(" ")[0]}
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">
                  {heroData.name.split(" ")[1]}
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400">
                <Music className="h-5 w-5" />
                <span className="text-lg font-medium">
                  {heroData.tagline} • {heroData.location}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {heroData.shortBio}
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Dynamic CTA buttons from Sanity */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {heroData.ctaButtons?.length ? (
                  heroData.ctaButtons.map((button, index) => (
                    <Button
                      key={index}
                      asChild
                      size="lg"
                      variant={
                        button.style === "primary" ? "default" : "outline"
                      }
                      className={
                        button.style === "primary"
                          ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                          : ""
                      }
                    >
                      <Link
                        href={button.url}
                        className="flex items-center space-x-2"
                      >
                        {button.url.includes("video") ? (
                          <Play className="h-5 w-5" />
                        ) : (
                          <Calendar className="h-5 w-5" />
                        )}
                        <span>{button.text}</span>
                      </Link>
                    </Button>
                  ))
                ) : (
                  // Default buttons if none configured
                  <>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    >
                      <Link
                        href="/videos"
                        className="flex items-center space-x-2"
                      >
                        <Play className="h-5 w-5" />
                        <span>Watch Performances</span>
                      </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg">
                      <Link
                        href="/performances"
                        className="flex items-center space-x-2"
                      >
                        <Calendar className="h-5 w-5" />
                        <span>Upcoming Shows</span>
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              {/* Donation link */}
              {siteSettings?.donationLink && (
                <div className="text-center lg:text-left">
                  <a
                    href={siteSettings.donationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Support live stream concerts</span>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-full bg-gradient-to-br from-amber-100 to-orange-100 shadow-2xl overflow-hidden">
                {heroData.profileImage ? (
                  <Image
                    src={heroData.profileImage}
                    alt={heroData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-amber-600">
                    <Music className="h-32 w-32" />
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Featured quote from Sanity */}
        {heroData.featuredQuote?.text && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              &ldquo;{heroData.featuredQuote.text}&rdquo;
            </blockquote>
            {heroData.featuredQuote.attribution && (
              <cite className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-2 block">
                — {heroData.featuredQuote.attribution}
              </cite>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
