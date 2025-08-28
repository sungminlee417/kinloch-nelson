'use client'

import { useEffect, useState } from 'react'

export function DebugTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    // Check immediately
    checkTheme()

    // Watch for changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      className="fixed top-4 right-4 z-50 p-2 text-white text-xs rounded"
      style={{
        backgroundColor: isDark ? 'green' : 'red'
      }}
    >
      Theme Test: {isDark ? 'DARK' : 'LIGHT'}
    </div>
  )
}