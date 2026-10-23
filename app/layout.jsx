import './globals.css'
import { getContent } from '../lib/content'

const settings = getContent('settings')

export const metadata = {
  title: settings.metaTitle,
  description: settings.metaDescription,
  icons: { icon: settings.logo },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
