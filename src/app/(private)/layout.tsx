'use client';
import { getUser } from '@/lib/user/get';
import { User } from '@/types/user';
import { Provider } from 'jotai';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const inter = Inter({ subsets: ['latin'] });

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token === undefined) {
      router.push('/login');
    }

    getUser()
      .then((data: User) => {
        sessionStorage.setItem('user', JSON.stringify(data));
      })
      .catch(() => {
        router.push('/login');
      });
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
