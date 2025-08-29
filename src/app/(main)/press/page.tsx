import PressPage from '@/components/sections/PressPage'

// ISR: Revalidate every minute for frequently updated press content
export const revalidate = 60

export const metadata = {
  title: 'Press Kit | Kinloch Nelson',
  description: 'Professional press kit, media resources, and promotional materials for Kinloch Nelson',
}

export default function Press() {
  return <PressPage />
}