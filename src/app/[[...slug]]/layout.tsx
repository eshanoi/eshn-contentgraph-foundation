import '@/styles/main.scss';
import { Roboto_Flex } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import Footer from '@/components/Footer';
import TopHeader from '@/components/TopHeader';
import BootstrapClient from '@/app/[[...slug]]/BootstrapWrapper';

const roboto = Roboto_Flex({
  subsets: ['latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <TopHeader />
        <div className="container">{children}</div>

        {/*TODO: Consider changing from bootstrap to another UI/CSS framework such as tailwind or MUI*/}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
