'use client';

import '@/app/globals.scss';

import { Provider } from 'jotai';

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
          {children}
        </Provider>
      </body>
    </html>
  );
}
