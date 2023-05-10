import Link from 'next/link';
import {useEffect} from 'react';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();
  
  const routesAndLink = [
    {id: 1, lable: 'Posts', link: '/posts'},
    {id: 2, lable: 'Blogs', link: '/blogs'},
    {id: 3, lable: 'Contact', link: '/contact'}
  ]

  const rednerMenu = routesAndLink.map(route => {
    return (
      <li key={route.id}>
        <Link href={route.link}  className="font-bold text-xl">
          {route.lable}
        </Link>
      </li>
    )
  })

  // useEffect(() => {
  //   if(!isSignIn()) {
  //     router.push('/login');
  //   }
  // }, [])

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="font-bold text-xl">
              My Website
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              {rednerMenu}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
