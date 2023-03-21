'use client';

import '@/app/globals.scss';
import { Provider } from 'jotai';

import styles from '@/app/layout.module.scss';

import { SiteFooter } from '@/components/feature/site/molecules/SiteFooter';
import { SiteHeader } from '@/components/feature/site/molecules/SiteHeader';
import { DebugAtoms } from '@/components/functional/DebugAtoms';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yumemi-Front</title>
      </head>
      <body>
        <Provider>
          <DebugAtoms />
          <div className={styles['header']}>
            <SiteHeader />
          </div>
          <div className={styles['main']}>{children}</div>
          <div className={styles['footer']}>
            <SiteFooter />
          </div>
        </Provider>
      </body>
    </html>
  );
}
