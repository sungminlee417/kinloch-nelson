import VideosPage from '@/components/sections/VideosPage'

// ISR: Revalidate every minute for frequently updated video content
export const revalidate = 60

export const metadata = {
  title: 'Videos | Kinloch Nelson',
  description: 'Complete collection of fingerstyle guitar performances, interviews, and educational content',
}

export default function Videos() {
  return <VideosPage />
}