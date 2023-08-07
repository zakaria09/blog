import Navbar from '@/components/navbar';
import './globals.css'
import AuthProvider from './AuthProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
