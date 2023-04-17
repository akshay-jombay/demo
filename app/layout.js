import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {AuthProvider} from './context/AuthProvider';
import useAuthContext from './hooks/use-authentication';

export const metadata = {
  title: 'Demo',
  description: 'demo',
}

export default function RootLayout({ children }) {
  // const { currentUser, signOut, signIn } = useAuthContext();
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header>RootLayout Layout Header</Header>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
          <Footer>RootLayout Layout Footer</Footer>
        </AuthProvider>
      </body>
    </html>
  )
}
