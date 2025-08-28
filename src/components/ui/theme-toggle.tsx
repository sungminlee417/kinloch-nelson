'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('system')
        break
      case 'system':
        setTheme('light')
        break
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'system':
        return <Monitor className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode'
      case 'dark':
        return 'Dark mode'
      case 'system':
        return 'System theme'
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
      className="relative overflow-hidden"
    >
      <div className="transition-all duration-300">
        {getIcon()}
      </div>
      <span className="sr-only">{getLabel()}</span>
    </Button>
  )
}

export function ThemeToggleDropdown() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-1 p-1 bg-muted rounded-lg">
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setTheme('light')}
        className="h-8 px-2"
      >
        <Sun className="h-3 w-3 mr-1" />
        Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setTheme('dark')}
        className="h-8 px-2"
      >
        <Moon className="h-3 w-3 mr-1" />
        Dark
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setTheme('system')}
        className="h-8 px-2"
      >
        <Monitor className="h-3 w-3 mr-1" />
        Auto
      </Button>
    </div>
  )
}