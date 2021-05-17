import Image from 'next/image';
import { useRouter } from 'next/router';

import style from './Header.module.scss';
import React from 'react';

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <Image
        onClick={() => router.push('/')}
        className={style.logoImage}
        src="/images/header-rick-and-morty.png"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <h1 className={style.title}>{title}</h1>
    </header>
  );
};

export default Header;
