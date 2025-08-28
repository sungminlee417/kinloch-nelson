'use client'

import { motion } from 'framer-motion'
import { Music, Play, Calendar } from 'lucide-react'

// Base skeleton component
export function Skeleton({ 
  className = "", 
  children 
}: { 
  className?: string
  children?: React.ReactNode 
}) {
  return (
    <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded ${className}`}>
      {children}
    </div>
  )
}

// Loading spinner with music note
export function LoadingSpinner({ size = "md", className = "" }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} text-amber-600`}
      >
        <Music className="w-full h-full" />
      </motion.div>
    </div>
  )
}

// Page loading with message
export function PageLoading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600 dark:text-gray-400 text-lg">{message}</p>
      </div>
    </div>
  )
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Skeleton className="h-16 w-80 mx-auto lg:mx-0 mb-4" />
            <Skeleton className="h-6 w-64 mx-auto lg:mx-0 mb-8" />
            <Skeleton className="h-24 w-full mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="w-80 h-80 rounded-full" />
          </div>
        </div>
        <div className="text-center mt-16">
          <Skeleton className="h-6 w-96 mx-auto mb-2" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </section>
  )
}

// Video grid skeleton
export function VideoGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: count }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                </motion.div>
              </div>
              <div className="p-6">
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials skeleton
export function TestimonialsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-72 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: count }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <Skeleton className="h-16 w-full mb-6" />
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Performances skeleton
export function PerformancesSkeleton({ count = 3 }: { count?: number }) {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="space-y-6">
          {Array.from({ length: count }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-gray-300 dark:border-gray-600 p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <Skeleton className="h-6 w-48" />
                  </div>
                  <Skeleton className="h-7 w-64 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <Skeleton className="h-12 w-full" />
                </div>
                <div className="lg:ml-6 mt-4 lg:mt-0">
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Recording skeleton
export function RecordingSkeleton() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Skeleton className="w-48 h-48 rounded-lg flex-shrink-0" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-16 w-full" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-22" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="w-6 h-4" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-4 w-12" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Press page skeleton
export function PressSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Skeleton className="h-16 w-16 mx-auto mb-6 bg-gray-600" />
            <Skeleton className="h-12 w-48 mx-auto mb-4 bg-gray-600" />
            <Skeleton className="h-6 w-96 mx-auto bg-gray-600" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio sections */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-6 w-32 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
                <div>
                  <Skeleton className="h-6 w-36 mb-4" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-40 mb-4" />
                {Array.from({ length: 4 }, (_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialsSkeleton />
      </div>
    </div>
  )
}

// Generic content skeleton
export function ContentSkeleton({ 
  lines = 3, 
  className = "" 
}: { 
  lines?: number
  className?: string 
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton 
          key={i} 
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
        />
      ))}
    </div>
  )
}