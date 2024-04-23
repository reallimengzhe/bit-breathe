import './globals.css'
import Nav from '../components/nav'

export const metadata = {
  title: '听风',
  description: '听风是一个干净、纯粹、专注的文字创作平台。',
}

export default function RootLayout({ children }) {
  return (
    <html lang='zh-CN'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
