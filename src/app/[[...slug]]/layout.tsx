import '@/styles/main.scss'
import { Roboto_Flex } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const roboto = Roboto_Flex({
  subsets: ['latin'],
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
