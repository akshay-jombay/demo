import './globals.css'
import ClientComponent from './(presentation)/components/ClientComponent';
import {AuthProvider} from './context/AuthProvider';


export const metadata = {
  title: 'Demo',
  description: 'demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientComponent className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </ClientComponent>
        </AuthProvider>
      </body>
    </html>
  )
}
