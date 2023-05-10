'use client';

import Header from './Header';
import Footer from './Footer';
import ToastComponent from './ToastComponent'

export default function ClientComponent({children}) {
  return (
    <>
      <ToastComponent />
      <Header>RootLayout Layout Header</Header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <Footer>RootLayout Layout Footer</Footer>
    </>
  );
}