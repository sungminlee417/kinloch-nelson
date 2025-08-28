'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'light' 
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Force light mode on mount
    const root = document.documentElement
    root.className = '' // Clear all classes
    root.classList.add('light')
    root.setAttribute('data-theme', 'light')
    setResolvedTheme('light')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    let effectiveTheme: 'light' | 'dark'
    
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light'
    } else {
      effectiveTheme = theme
    }
    
    // Clear all theme classes and apply new one
    root.className = root.className.replace(/\b(light|dark)\b/g, '')
    root.classList.add(effectiveTheme)
    root.setAttribute('data-theme', effectiveTheme)
    setResolvedTheme(effectiveTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
    
    console.log(`Theme changed to: ${theme}, effective: ${effectiveTheme}, classes: ${root.className}`)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}