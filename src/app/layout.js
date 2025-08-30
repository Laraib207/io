import './globals.css'

export const metadata = {
  title: 'Veer Bharat - Manufacturing Unit Lookup',
  description: 'Find manufacturing unit addresses for Veer Bharat oil products by batch code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}